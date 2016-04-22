/// <reference path="../libs/angular.route.js" />
/// <reference path="../libs/angular.min.js" />
(function (angular) {
    var myApp = angular.module('myApp', ["ngRoute"]);

    myApp.config(function ($routeProvider) {
        $routeProvider
            .when('/view1',
            {
                controller: 'CustomerController',
                templateUrl: 'Partial/View1.html'
            })
            .when('/view2',
            {
                controller: 'CustomerController',
                templateUrl: 'Partial/View2.html'
            })
            .otherwise({ redirectTo: '/view1' });
    });

})(angular);