// DNA pairing  for free code camp 

function translatePigLatin(str) {
 var pigLatin = '';
var vowels = ['a','e','i','o','u'];
 
for(var index=0 ;index<vowels.length;index++){
   if(str.charAt(0)===vowels[index]){
      pigLatin = str+'way';
         return pigLatin;
    }
   }
  
 for(var index1=0 ;index1<vowels.length;index1++){
   for(var index2=0;index2<vowels.length;index2++){
     if(str.charAt(index1)===vowels[index2]){
       pigLatin = str.substr(index1)+str.slice(0,index1)+'ay';
         return pigLatin;
 
     }
   }
 } 
 
  return 'pigLatin';
}