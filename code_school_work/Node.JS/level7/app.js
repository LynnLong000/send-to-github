// 7.2 simple redis commmands
// 7.3 get a key 

var redis = require('redis');
var client = redis.createClient();

//client.set("name","Lynn");

client.get("question",function(error,data){
  console.log(data);
});