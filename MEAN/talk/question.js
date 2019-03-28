var answer = "Now that's a good question";
// expose method
module.exports.ask = function(question){
	console.log(question);
	return answer;
};