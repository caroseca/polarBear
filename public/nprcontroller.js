var app = angular.module('myModule', []);

app.controller('nprcontroller', function($http, $scope){

  $scope.nprexecute = function (){
    // var nprarrays = [];
    $http({
      method: 'GET',
      url: 'http://api.npr.org/query?id=1048&apiKey=MDI0MjY4MzY5MDE0NjMwMDY4NTQ1YWY4MA000'
    }).then(function (response) {
      console.log(response);
      // $scope.nprarrays = response.data.response.results;
      
    }, function () {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
      console.log("ERROR");
    });
  }
});