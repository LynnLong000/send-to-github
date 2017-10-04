// 7.2 simple redis commmands

var redis = require('redis');
var client = redis.createClient();

client.set("name","Lynn");