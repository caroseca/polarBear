var app = angular.module('myModule',[]);
//
//     app.controller('jobInterviewcontroller', function($scope, $http){
//       $scope.break = function(){
//
//     if (document.getElementById("situation").value === "job"){
//       var arrays = [];
//       $http({
//         method: 'GET',
//         url: 'https://api.nytimes.com/svc/mostpopular/v2/mostviewed/world/1.json?&api-key=c272b43bf0ba4faa9817ba9eb353c6b4'
//       }).then(function (response) {
//     $scope.arrays = response.data.results;
//     }, function (response) {
//       console.log('error')
//     });
//       console.log('job id works')
//     };
//     };
//     });
//     app.controller('speechPrescontroller', function($scope, $http){
//       $scope.break = function(){
//
//      if (document.getElementById("situation").value === "speech"){
//       var arrays = [];
//       $http({
//         method: 'GET',
//         url: 'https://api.nytimes.com/svc/mostpopular/v2/mostviewed/world/1.json?&api-key=c272b43bf0ba4faa9817ba9eb353c6b4'
//       }).then(function (response) {
//     $scope.arrays = response.data.results;
//     }, function (response) {
//       console.log('error')
//     });
//       console.log('speech id works')
//
//     };
//   };
//   });
//   app.controller('elevatorSpeechcontroller', function($scope, $http){
//     $scope.break = function(){
//
//      if (document.getElementById("situation").value === "elevator"){
//       var arrays = [];
//       $http({
//         method: 'GET',
//         url: 'https://api.nytimes.com/svc/mostpopular/v2/mostviewed/world/1.json?&api-key=c272b43bf0ba4faa9817ba9eb353c6b4'
//       }).then(function (response) {
//     $scope.arrays = response.data.results;
//     }, function (response) {
//       console.log('error')
//     });
//     console.log('elevator id works')
//
//     } else {
//       console.log('error!')};
