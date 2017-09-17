// caesars cipher  free code camp

function rot13(str) { // LBH QVQ VG!
  var newStr = [];
  str = str.split("");
  for(var i=0;i<str.length;i++){
    if(str[i].charCodeAt() > 64 && str[i].charCodeAt() <= 77 ){
      newStr.push(str[i].charCodeAt() + 13);
    } else if (str[i].charCodeAt() > 77 && str[i].charCodeAt() <91 ){
      newStr.push(str[i].charCodeAt() - 13 );
    } else {     
      newStr.push(str[i].charCodeAt());
    }
  }  
  str = String.fromCharCode.apply(String,newStr);
  return str;
}