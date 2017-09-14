// picking the longest world from a sentence 

function findLongestWord(str) {
  var long = str.split(" ");
  var num = long.length;
  var max = 0 ;
  for (var i=0;i<num;i++){
    if(long[i].length>max){
      max = long[i].length;
    } 
  }  
 return max; 
}
