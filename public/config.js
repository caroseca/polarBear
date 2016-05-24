var app = angular.module('myModule', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when("/firstDate", {
			controller: "firstDatecontroller",
			templateUrl: "firstDate.html"
				})
		.when("/inlaws", {
			controller: "inLawscontroller",
			templateUrl: "inLaws.html"
				})
		.when("/mingling", {
			controller: "minglingcontroller",
			templateUrl: "mingling.html"
				})
		.when("/jobInterview", {
			controller: "jobInterviewcontroller",
			templateUrl: "jobInterview.html"
				})
		.when("/speechPres", {
			controller: "speechPrescontroller",
			templateUrl: "speechPres.html"
				})
		.when("/elevatorSpeech", {
			controller: "elevatorSpeechcontroller",
			templateUrl: "elevatorSpeech.html"
				})
		.when("/aboutUs", {
			controller: "aboutUs",
			templateUrl: "aboutUs.html"
				})
		.otherwise({redirectTo: "/"});
});
