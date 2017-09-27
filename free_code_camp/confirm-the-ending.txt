// Confirm the Ending
// did a committed everything out and refactor the code to one line... boss


function confirmEnding(str, target) {
  /*
  var arr = str.split(" ");

  if (arr.length === 1 && str.substring(str.length-1)===target){
    return true ;
  }

   if (arr.length === 1 && str.substring(str.length-1) != target){
    return false ;
  } 
  
  
  for (var i = 0 ; i<arr.length;i++){
    if(arr[i] === target && i !=arr.length-1){
      return false;
    }else if(arr[i] != target && i !=arr.length-1){
      return false ;
    } else if (arr[i] === target && i ==arr.length-1){
      return true ;
    } else if(arr[i] === arr.length-1){
      for(var j = 0;j<arr[i];j++){
        if(arr[i].substring(j)==target){
          return true;
        }
        
      }
    }
  }
  
  
  
  if (arr.length > 0 && arr[arr.length-1] == target){
    return true;  
  }
  
  if(arr.length > 0 && arr[arr.length-1] != target){
    return false;
  } */
  
  return str.substr(str.length-target.length,target.length) == target;
}