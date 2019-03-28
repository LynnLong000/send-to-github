// main method

//accessing other files no name for the .js
require('./instantHello');
var goodbye = require('./talk/goodbye'); // sun folders
var talk = require ('./talk');
var question = require('./talk/question')

// using another method and its function
talk.intro();

// using another method and its function and passing a variable 
talk.hello("Peter")

// calling method and using it as a variable 
var answer = question.ask("What is the meaning of life?")
console.log(answer);

goodbye();
