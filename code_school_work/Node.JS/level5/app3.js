// 5.5 url building   updaing for 5.6 doing the requests // 5.7 update  express server
var url = require('url');
var express = require('express'); // u5.7 updated
var options = {
  // add URL options here
  protocol:'http://search.twitter.com/search.json?q=codeschool',
  host:"search.twitter.com",
  pathname: '/search.json',
  query:{
    q:"codeschool"
  }
};

var searchURL = url.format(options);
var app = express(); // Create server here

app.get('/',function(req,res){
  request(searchURL).pipe(res);
});

app.listen(8080);
/*
console.log(searchURL);
var request = require('request');

request(searchURL,function(err,response,body){
  console.log(body);
});
*/
