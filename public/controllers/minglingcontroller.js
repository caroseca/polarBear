var app = angular.module('myModule');
app.controller('minglingcontroller', function($scope, $http){
  $scope.break = function(){

  if (document.getElementById("situation").value === "mingle"){
      var arrays = [];
      $http({
        method: 'GET',
        url: 'https://api.nytimes.com/svc/mostpopular/v2/mostviewed/world/1.json?&api-key=c272b43bf0ba4faa9817ba9eb353c6b4'
      }).then(function (response) {
    $scope.arrays = response.data.results;
    $location.url(mingling.html)
    });
      console.log("party id works")
    };
  };
});
