// variables to use 
var filename = "index.js"

// function as a  variable
var hello = function(name){
	console.log("Hello " + name);
};

// function as a  variable
var intro = function(){
	console.log("I'm a node file called " + filename);
};

//exporting both function
module.exports = {
	hello : hello,
	intro : intro
};