var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var parseUrlencoded = bodyParser.urlencoded({ extended: false});

var cities = {
    "Dublin" : "Ireland",
    "Barcelona" : "Spain",
    "New York" : "USA",
    "Tokyo" : "Japan",
    "Sydney" : "Australia"
};

router.route("/")
.get(function(request, response) {
     var cities = ["Dublin", "Barcelona", "New York", "Tokyo", "Sydney"]; 
   if(request.query.limit >= 0) {
       response.json(cities.slice(0, request.query.limit));
   } else if(request.query.limit >= cities.length) {
       response.status(404).json("Exceeds number of cities");  
   } else {
    response.json(Object.keys(cities));   
   }  
})
.post(parseUrlencoded, function(request, response) {
     var newCity = request.body
   cities[newCity.name] = newCity.description;
   
   response.status(201).json(newCity.name); 
});

router.route("/:name")
.all(function(request, response, next) {
    var name = request.params.name;
    var city = name[0].toUpperCase() + name.slice(1).toLowerCase();
    
    request.cityName = city;
    next();
})
.get(function(request, response) {
    var description = cities[request.cityName];
    if(!description) {
        response.status(404).json("No description found for " + request.params.name);    
    } else {
        response.json(description);
    }    
})
.delete(function(request, response) {
   delete cities[request.cityName];
   response.sendStatus(200);    
});

module.exports = router;