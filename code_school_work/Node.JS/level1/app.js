/* in html

<html><p>Hello, this is Dog</p></html>

*/

/* 1.2 Hello you

var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is Lynn");
  response.end();
}).listen(8080);

1.8 
you can rewrite  so it says response.end('hello, this is Lynn');

*/
/* 1.5 Read File in server 
var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  response.writeHead(200);
  fs.readFile('index.html', function(error,contents){
    response.write(contents);
    response.end();
  });
}).listen(8080);
*/

// 1.7 Read File in server 
var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  response.writeHead(200,{
    'Content-Type' : 'text/html'
  });

  fs.readFile('index.html', function(err, contents) {
    response.write(contents);
    response.end();
  });

}).listen(8080);


