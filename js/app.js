var app = angular.module('SungheeApp', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			controller: 'HomeController',
			templateUrl: 'templates/home.html'
		})
        .state('services', {
            url: '/services',
            templateUrl: 'templates/services.html'
        })
		.state('resources', {
            url: '/resources',
            templateUrl: 'templates/resources.html'
        })
		.state('about', {
            url: '/about',
            templateUrl: 'templates/about.html'
        })
		.state('contact', {
            url: '/contact',
            templateUrl: 'templates/contact.html'
        });

        $urlRouterProvider.otherwise('/');
});

app.controller('HomeController', function ($scope) { 
	$scope.width = screen.width;
});