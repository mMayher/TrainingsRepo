/// <reference path="../lib/angular.min.js" />

var questApp = angular.module('questApp');
questApp.controller('QuestionController', function ($scope, dataService) {

    $scope.question = dataService.question;

    $scope.voteUp = function (answer) {
        answer.rate++;
    };
    $scope.voteDown = function (answer) {
        answer.rate--;
    };
    $scope.questColorClass = "questcolor";
    $scope.changeClass = function (e) {

        $scope.questColorClass = e.type == "mouseover" ? "questselectedcolor" : "questcolor";
    }
});
