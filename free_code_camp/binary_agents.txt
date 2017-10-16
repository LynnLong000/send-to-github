// binary agents  free code camp 

function binaryAgent(str) {
  str = str.split(' ');
  for (var i = 0; i<str.length; i++) {
    str[i]=str[i].split('');
    for (var j=0; j<str[i].length; j++) {
      str[i][j] = parseInt(str[i][j]) * Math.pow(2, str[i].length-j-1);   
    }
    str[i] = String.fromCharCode(str[i].reduce(function(a,b) {
      return a+b;
    }));
  }
  
  return str.join('');
}
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


Aren't bonfires fun!?