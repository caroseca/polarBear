var app = angular.module('myModule', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when("/aboutUs", {
			controller: "aboutUs",
			templateUrl: "aboutUs.html"
				})
		.otherwise({redirectTo: "/"});
});
