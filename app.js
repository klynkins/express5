var express = require("express");
var app = express();

app.use(express.static("public"));

var cities = require("./routes/cities");
app.use("/cities", cities);

/*
app.route("/cities")
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


app.route("/cities/:name")
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



app.param("name", function(request, response, next) {
    var name = request.params.name;
    var city = name[0].toUpperCase() + name.slice(1).toLowerCase();
    
    request.cityName = city;
    next();
});


app.get("/cities", function(request, response) {
   var cities = ["Dublin", "Barcelona", "New York", "Tokyo", "Sydney"]; 
   if(request.query.limit >= 0) {
       response.json(cities.slice(0, request.query.limit));
   } else if(request.query.limit >= cities.length) {
       response.status(404).json("Exceeds number of cities");  
   } else {
    response.json(Object.keys(cities));   
   }
});

app.get("/cities/:name", function(request, response){
    var description = cities[request.cityName];
    if(!description) {
        response.status(404).json("No description found for " + request.params.name);    
    } else {
        response.json(description);
    }
});

app.post("/cities", parseUrlencoded, function(request, response) {
   var newCity = request.body
   cities[newCity.name] = newCity.description;
   
   response.status(201).json(newCity.name);
});

app.delete("/cities/:name", function(request, response) {
   delete cities[request.cityName];
   response.sendStatus(200);
});
*/
app.listen(process.env.PORT, function() {
    console.log(process.env.IP);
    console.log(process.env.PORT);
});