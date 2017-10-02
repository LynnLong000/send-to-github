// 1.2 Hello you

var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is Lynn");
  response.end();
}).listen(8080);

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