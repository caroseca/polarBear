var app = angular.module('myModule', []);

app.controller('resultscontroller', function($http, $scope){

  $scope.execute = function (){
    var arrays = [];
    $http({
      method: 'GET',
      url: 'https://content.guardianapis.com/search?q=beyonce&api-key=5d741299-d8d4-4fbf-8309-f6e6049e531c'
    }).then(function (response) {
      $scope.arrays = response.data.response.results;
      
    }, function () {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
      console.log("ERROR");
    });
  }
});

  	