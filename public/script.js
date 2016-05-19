var app = angular.module('myModule', []);

app.controller('resultscontroller', function($http, $scope){

$scope.execute = function (){
    $http({
      method: 'GET',
      url: '/json/jokes.json'
    }).then(function (response) {
      var jokeObject = [];
      console.log(response.data.jokes);
      for(var i = 0; i <= 2; i++){
      jokeObject.push(response.data.jokes[Math.floor(Math.random() * response.data.jokes.length)]);
      console.log(jokeObject[i].joke);
      }
      $scope.yayJoke = jokeObject;
      // arrays[Math.floor(Math.random()*arrays.length)];
      // $scope.arrays = response.data.jokes;
    }, function () {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
      console.log("ERROR");
    });
  }
});
//   $scope.execute = function (){
//     var arrays = [];
//     $http({
//       method: 'GET',
//       url: 'https://content.guardianapis.com/search?q=beyonce&api-key=5d741299-d8d4-4fbf-8309-f6e6049e531c'
//     }).then(function (response) {
//       $scope.arrays = response.data.response.results;

//     }, function () {
//     // called asynchronously if an error occurs
//     // or server returns response with an error status.
//       console.log("ERROR");
//     });
//   }
// });
// var app = angular.module('myModule', []);

// app.controller('resultscontroller', function($http, $scope){

//   $scope.execute = function (){
//     var arrays = [];
//     $http({
//       method: 'GET',
//       url: 'http(s)://api.sportradar.us/mlb-t1/games/[event_id]/boxscore.[format]?api_key=[your_api_key]'
//     }).then(function (response) {
//       console.log(response);
//     }, function () {
//     // called asynchronously if an error occurs
//     // or server returns response with an error status.
//       console.log("ERROR");
//     });
//   }
// });
//
