/// <reference path="../angular.js" />
(function (angular) {
    var questApp = angular.module('questApp');

    questApp.controller('questCtrl', function ($scope) {
        $scope.quizzes = [
            {
                question: 'What is the base type for all types in .Net?',
                variants: ['object', 'string', 'Type', 'No correct answer'],
                rigthAnswer: 'object'
            },
            {
                question: 'What from the following is not a JS framework?',
                variants: ['Angular', 'Knockout', 'Meteor', 'Entity Framework'],
                rigthAnswer: 'Entity Framework'
            },
            {
                question: 'What is the alias for System.Int32 in C#?',
                variants: ['long', 'char', 'int', 'dick'],
                rigthAnswer: 'int'
            },
            {
                question: 'What type is the core of reflection in .Net?',
                variants: ['Assembly', 'Type', 'Action', 'Exception'],
                rigthAnswer: 'Type'
            },
            {
                question: 'What type is the base type for all exceptions in .Net',
                variants: ['ValueType', 'Monitor', 'Exception', 'Thread'],
                rigthAnswer: 'Exception'
            }
        ]
        $scope.currentQuestion = 0;
        $scope.userResult = [$scope.quizzes.length];
        $scope.total = 0;

        $scope.setCurrent = function (index) {
            $scope.currentQuestion = index;
        }

        $scope.incrementCurrent = function () {
            if ($scope.currentQuestion + 1 <= $scope.quizzes.length - 1) {
                $scope.currentQuestion++;
            }
        }

        $scope.decrementCurrent = function () {
            if ($scope.currentQuestion - 1 >= 0) {
                $scope.currentQuestion--;
            }
        }

        $scope.setUserChoice = function (index, variant) {
            $scope.userResult[index] = variant;

            if ($scope.quizzes[$scope.currentQuestion].rigthAnswer == variant) {
                $scope.total++;
            }
        }

        $scope.showResult = function () {
            alert('Your result is ' + $scope.total + ' right answers');
        }

    });
})(angular);