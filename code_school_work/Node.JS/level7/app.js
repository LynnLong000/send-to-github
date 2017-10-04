// 7.2 simple redis commmands
// 7.3 get a key 
// 7.4 working with list 1

var redis = require('redis');
var client = redis.createClient();

var question1 = "Where is the dog?";
var question2 = "Where is the cat?";

/* client.set("name","Lynn");

client.get("question",function(error,data){
  console.log(data);
});
*/

client.lpush("questions",question1,function(error,value){
  console.log(value);
});

client.lpush("questions",question2,function(error,value){
  console.log(value);
});
