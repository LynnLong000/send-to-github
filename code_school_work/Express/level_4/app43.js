// 4.3 validation 

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });

app.post('/cities', parseUrlencoded, function (request, response) {
    if(request.body.description.length > 4){
      response.status(201).json(createCity(request.body.name, request.body.description)); 
    } else {
      response.status(400).json('Invalid City');
    }
});

app.listen(3000);
