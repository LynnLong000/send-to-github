// 1.3 locations
// 1.4 content type I application/json
// 1.6 cities locations chaned to cities     

var express = require('express');
var app = express ();

app.get('/cities', function (request, response) {                                                                                                     
  var cities = ['Caspiana', 'Indigo', 'Paradise'];
  response.send(cities);
});

app.get('/locations',function(request,response){
  response.redirect(301,'/cities');
});

app.listen(3001,function(){
  console.log('Running Express');
});



/*

// 1.5 content type II text/html

var express = require('express');
var app = express ();

app.get('/locations',function(req,res){
  var locations = ['Caspiana','Indigo','Paradise'];
  res.send(locations); 
});

app.listen(3001,function(){
  console.log('Running Express');
});



*/