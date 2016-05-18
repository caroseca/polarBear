var app = angular.module('myModule');

	app.factory('apiService', function($http) {
//         return {
//         getData: function() {
//             return $http.get('http://webknox.com/api/jokes/search?keywords=' + search, {params: {apiKey: 'apiKey'}});
//                 .then(function(result) {
//                     return result.data;
//             }
//         );
//     }
// }