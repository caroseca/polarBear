var app = angular.module('myModule',[]);

app.controller('resultscontroller', function($scope, $http, $location){
  $scope.break = function(){

  if (document.getElementById("situation").value === "date"){
      var arrays = [];
      $http({
        method: 'GET',
        url: 'https://api.nytimes.com/svc/mostpopular/v2/mostviewed/world/1.json?&api-key=c272b43bf0ba4faa9817ba9eb353c6b4'
      }).then(function (response) {
    $scope.arrays = response.data.results;
    var path = $location.path('/firstDate.html')
    });
      console.log("date id works")

  if (document.getElementById("situation").value === "inlaws"){
      var arrays = [];
      $http({
        method: 'GET',
        url: 'https://api.nytimes.com/svc/mostpopular/v2/mostviewed/world/1.json?&api-key=c272b43bf0ba4faa9817ba9eb353c6b4'
      }).then(function (response) {
    $scope.arrays = response.data.results;
    });
      console.log("inlaws id works")

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

    if (document.getElementById("situation").value === "job"){
      var arrays = [];
      $http({
        method: 'GET',
        url: 'https://api.nytimes.com/svc/mostpopular/v2/mostviewed/world/1.json?&api-key=c272b43bf0ba4faa9817ba9eb353c6b4'
      }).then(function (response) {
    $scope.arrays = response.data.results;
    });
      console.log('job id works')

     if (document.getElementById("situation").value === "speech"){
      var arrays = [];
      $http({
        method: 'GET',
        url: 'https://api.nytimes.com/svc/mostpopular/v2/mostviewed/world/1.json?&api-key=c272b43bf0ba4faa9817ba9eb353c6b4'
      }).then(function (response) {
    $scope.arrays = response.data.results;
    });
      console.log('speech id works')

     if (document.getElementById("situation").value === "elevator"){
      var arrays = [];
      $http({
        method: 'GET',
        url: 'https://api.nytimes.com/svc/mostpopular/v2/mostviewed/world/1.json?&api-key=c272b43bf0ba4faa9817ba9eb353c6b4'
      }).then(function (response) {
    $scope.arrays = response.data.results;
    });
    console.log('elevator id works')
  } else {
      console.log('error!')};
    };
  });
