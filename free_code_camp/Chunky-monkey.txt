//Chunky Monkey in free code camp

function chunkArrayInGroups(arr, size) {
  // Break it up.
 var arr2 =[],
 i=0;
 while( i< arr.length){
  arr2.push(arr.slice(i,i+=size));
 }
 return arr2;
}

