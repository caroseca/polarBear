var app = angular.module('myModule', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when("/results", {
			controller: "resultscontroller",
			templateUrl: "results.html"
				})
		.otherwise({redirectTo: "/"});
});
