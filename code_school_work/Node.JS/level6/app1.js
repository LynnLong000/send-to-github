// 6.2 setting Up socket i.o server side 
// 6.5 Broadcasting Questions 
// 6.6 Saving client Data
// 6.7 Answering Questions

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client) {
    console.log("Client connected...");
    client.on('answer',function(question,answer){
        client.broadcast.emit('answer', question,answer);
    });
    
    
    
    
    
    
    client.on('question',function(question){
        if(!client.question_asked){
            client.broadcast.emit("question",question);
            client.question_asked = true;
        }
    });       
});

server.listen(8080);
