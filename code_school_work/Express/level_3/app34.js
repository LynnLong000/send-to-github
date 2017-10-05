// 3.4 city information 

var express = require('express');
var app = express();

var cities = {
  'Lotopia': 'Rough and mountainous',
  'Caspiana': 'Sky-top island',
  'Indigo': 'Vibrant and thriving',
  'Paradise': 'Lush, green plantation',
  'Flotilla': 'Bustling urban oasis'
};

app.get('/cities/:name', function (request, response) {
  var cityInfo = cities[request.params.name];
  if(!cityInfo){
    response.status(404).json('City not found');
  } else {
    response.json(cityInfo);
  }
});

app.listen(3000);
 