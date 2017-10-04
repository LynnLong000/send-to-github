// 7.2 simple redis commmands
// 7.3 get a key 
// 7.4 working with list 1
// 7.5 working with list 2 
// 7.6 Persisting 
// 7.7 emitting stored Questions 
// 7.8 Limiting Questions stored

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var socket = require('socket.io');
var io = socket.listen(server);

var redis = require('redis');
var redisClient = redis.createClient();

io.sockets.on('connection', function(client) {
    redisClient.lrange('questions',0,-1,function(err,question){
        question.forEach(function(question){
            client.emit('question',question);
        });   
  });
    
    client.on('answer', function(question, answer) {
        client.broadcast.emit('answer', question, answer);
    });

    client.on('question', function(question) {
        if(!client.question_asked) {
            client.question_asked = true;
            client.broadcast.emit('question', question);
            // add the question to the list here
            redisClient.lpush("questions",question, function(err,response){
                redisClient.ltrim('questions',0,19);
            });
        }
    });
});







/*
var question1 = "Where is the dog?";
var question2 = "Where is the cat?";

 client.set("name","Lynn");

client.get("question",function(error,data){
  console.log(data);
});


client.lpush("questions",question1,function(error,value){
  console.log(value);
});

client.lpush("questions",question2,function(error,value){
  console.log(value);
});


client.lrange("questions", 0, -1, function(err, messages){
 console.log(messages);
});
*/