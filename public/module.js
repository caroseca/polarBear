var app = angular.module('myModule',[]);

app.controller('resultscontroller', function($scope, $http, $location){
  $scope.break = function(){
//////////////////////////
// DATE IS POPCULTURE API + JOKES
//////////////////////////
  if (document.getElementById("situation").value === "date"){
      $http({
        method: 'GET',
        url: 'http://content.guardianapis.com/search?order-by=newest&q=beyonce&api-key=5d741299-d8d4-4fbf-8309-f6e6049e531c'
      }).then(function (responseBey) {
        var arraysBey = [];
          console.log(responseBey.data.response.results);
          $( "<h3>A few Beyonce headlines to break the icy lemonade:</h3>" ).prependTo( ".results1" );
          $scope.arraysBey = responseBey.data.response.results; 
      });

      $http({
        method: 'GET',
        url: '/json/jokes.json'
      }).then(function (response) {
        var jokeObject = [];
        // console.log(response.data.jokes);
        for(var i = 0; i <= 2; i++){
          jokeObject.push(response.data.jokes[Math.floor(Math.random() * response.data.jokes.length)]);
            }
        $( "<h3>A few jokes to break that ice:</h3>" ).prependTo( ".results2" );
        $scope.yayJoke = jokeObject; 
      });
//////////////////////////
// MEETING INLAWS IS NYT API + JOKES
//////////////////////////
  } else if (document.getElementById("situation").value === "inlaws") {
      $http({
        method: 'GET',
        url: 'https://api.nytimes.com/svc/mostpopular/v2/mostviewed/world/1.json?&api-key=c272b43bf0ba4faa9817ba9eb353c6b4'
      }).then(function (responseNyt) {
        var arraysNyt = [];
        // console.log(responseNyt);
        $( "<h3>A few world news New York Times headlines to break the ice:</h3>" ).prependTo( ".results1" );
        $scope.arraysNyt = responseNyt.data.results; //display on page {{array.abstract}}
    });
    
    $http({
        method: 'GET',
        url: '/json/jokes.json'
      }).then(function (response) {
        var jokeObject = [];
        // console.log(response.data.jokes);
        for(var i = 0; i <= 2; i++){
          jokeObject.push(response.data.jokes[Math.floor(Math.random() * response.data.jokes.length)]);
            }
        $( "<h3>A few jokes to break that ice:</h3>" ).prependTo( ".results2" );
        $scope.yayJoke = jokeObject; 
      });
  
//////////////////////////
// MINGLING IS BEYONCE + JOKES
//////////////////////////
} else if (document.getElementById("situation").value === "mingle"){
      $http({
        method: 'GET',
        url: 'http://content.guardianapis.com/search?order-by=newest&q=beyonce&api-key=5d741299-d8d4-4fbf-8309-f6e6049e531c'
      }).then(function (responseBey) {
        var arraysBey = [];
          console.log(responseBey.data.response.results);
          $( "<h3>A few Beyonce headlines to break the icy lemonade:</h3>" ).prependTo( ".results1" );
          $scope.arraysBey = responseBey.data.response.results; 
      });

      $http({
        method: 'GET',
        url: '/json/jokes.json'
      }).then(function (response) {
        var jokeObject = [];
        // console.log(response.data.jokes);
        for(var i = 0; i <= 2; i++){
          jokeObject.push(response.data.jokes[Math.floor(Math.random() * response.data.jokes.length)]);
            }
        $( "<h3>A few jokes to break that ice:</h3>" ).prependTo( ".results2" );
        $scope.yayJoke = jokeObject; 
      });
//////////////////////////
// INTERVIEW IS NYT + GUARDIAN TECH
//////////////////////////
} else if (document.getElementById("situation").value === "job"){
      $http({
        method: 'GET',
        url: 'https://api.nytimes.com/svc/mostpopular/v2/mostviewed/world/1.json?&api-key=c272b43bf0ba4faa9817ba9eb353c6b4'
      }).then(function (responseNyt) {
        var arraysNyt = [];
        // console.log(responseNyt);
        $( "<h3>A few world news New York Times headlines to break the ice:</h3>" ).prependTo( ".results1" );
        $scope.arraysNyt = responseNyt.data.results; //display on page {{array.abstract}}
    });

      $http({
        method: 'GET',
        url: 'http://content.guardianapis.com/search?order-by=newest&section=technology&api-key=5d741299-d8d4-4fbf-8309-f6e6049e531c'
      }).then(function (responseTech) {
        var arraysTech = [];
          console.log(responseTech.data.response.results);
          $( "<h3>A few technology headlines to break the ice:</h3>" ).prependTo( ".results2" );
          $scope.arraysTech = responseTech.data.response.results; 
      });
//////////////////////////
// SPEECH IS JOKES AND TECH
//////////////////////////
} else if (document.getElementById("situation").value === "speech"){
      $http({
        method: 'GET',
        url: '/json/jokes.json'
      }).then(function (response) {
        var jokeObject = [];
        // console.log(response.data.jokes);
        for(var i = 0; i <= 2; i++){
          jokeObject.push(response.data.jokes[Math.floor(Math.random() * response.data.jokes.length)]);
            }
        $( "<h3>A few jokes to break that ice:</h3>" ).prependTo( ".results2" );
        $scope.yayJoke = jokeObject; 
      });

      $http({
        method: 'GET',
        url: 'http://content.guardianapis.com/search?order-by=newest&section=technology&api-key=5d741299-d8d4-4fbf-8309-f6e6049e531c'
      }).then(function (responseTech) {
        var arraysTech = [];
          console.log(responseTech.data.response.results);
          $( "<h3>A few technology headlines to break the ice:</h3>" ).prependTo( ".tech" );
          $scope.arraysTech = responseTech.data.response.results; 
      });

//////////////////////////
// ELEVATOR IS TECH + POPCULTURE
//////////////////////////
} else if (document.getElementById("situation").value === "elevator"){
       
       $http({
        method: 'GET',
        url: 'http://content.guardianapis.com/search?order-by=newest&q=beyonce&api-key=5d741299-d8d4-4fbf-8309-f6e6049e531c'
      }).then(function (responseBey) {
        var arraysBey = [];
          console.log(responseBey.data.response.results);
          $( "<h3>A few Beyonce headlines to break the icy lemonade:</h3>" ).prependTo( ".results1" );
          $scope.arraysBey = responseBey.data.response.results; 
         });

      $http({
        method: 'GET',
        url: 'http://content.guardianapis.com/search?order-by=newest&section=technology&api-key=5d741299-d8d4-4fbf-8309-f6e6049e531c'
      }).then(function (responseTech) {
        var arraysTech = [];
          // console.log(responseTech.data.response.results);
          $( "<h3>A few technology headlines to break the ice:</h3>" ).prependTo( ".results2" );
          $scope.arraysTech = responseTech.data.response.results; 
      });
  } else {
      console.log('Oh darn.  Trapped on an iceberg all by yourself!')};
    };
  });
