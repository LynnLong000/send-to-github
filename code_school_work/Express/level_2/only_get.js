// 2.9 only get 

 module.exports = function(request, response, next){
   if(request.method === 'GET'){
       next();
   } else {
   response.send('Method is not allowed');
     }
};