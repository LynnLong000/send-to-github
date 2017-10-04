// 5.5 url building 
var url = require('url');

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
console.log(searchURL);
