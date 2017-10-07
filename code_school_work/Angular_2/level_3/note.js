//3.2 A factory recipe I 

angular.module('NoteWrangler')
.factory('anime', [function AnimeFactory(){
  
}]);


//3.3 Afactory recipe II
// one file 
angular.module('NoteWrangler')
.factory('Note', ['$http', function NoteFactory($http) {
  /*Return an object from the NoteFactory() function that has a method named all.*/
  return {
    /*Move the $http() call from the controller into the all() function in our Note factory and return the resulting promise. Don't forget to inject the $http service!*/
    all:function(){
      return $http({method: 'GET', url: '/notes'});
    }
  };
}]);

//another file 

angular.module('NoteWrangler')
/*Inject the Note factory into the controller and use the new all() method instead of calling $http() directly.*/
.controller('NotesIndexController', function($scope, Note) {
  Note.all()
  .success(function(data){
    $scope.notes = data;
  });
});