var app = angular.module('myModule',[]);
app.controller('newsController', function($scope, $http){
  $scope.break = function(){

  if (document.getElementById("situation").value === "date"){
      var arrays = [];
      $http({
        method: 'GET',
        url: 'https://api.nytimes.com/svc/mostpopular/v2/mostviewed/world/1.json?&api-key=c272b43bf0ba4faa9817ba9eb353c6b4'
      }).then(function (response) {
      // console.log(response.data.results);
    $scope.arrays = response.data.results;
    }, function (response) {
      console.log('error')
    });

      console.log("date id works")

    } else if (document.getElementById("situation").value === "inlaws"){
      console.log('inlaws id works')

    } else if (document.getElementById("situation").value === "job"){
      console.log('job id works')

    } else if (document.getElementById("situation").value === "party"){
      console.log('party id works')

    } else if (document.getElementById("situation").value === "speech"){
      console.log('speech id works')

    } else {
      console.log('error!')};
};
});
