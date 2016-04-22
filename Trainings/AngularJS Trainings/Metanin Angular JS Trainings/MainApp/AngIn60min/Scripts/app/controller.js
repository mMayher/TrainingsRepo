(function (angular) {
    var myApp = angular.module('myApp');
    myApp.controller('CustomerController', function ($scope) {
        $scope.customers = [
            { name: 'Maryan', city: 'Lviv' },
            { name: 'Ivan', city: 'Kyiv' },
            { name: 'Mike', city: 'New York' },
            { name: 'Daniel', city: 'Paris' }
        ];


        $scope.addCustomer = function () {
            $scope.customers.push({ name: $scope.newCust.name, city: $scope.newCust.city });
            $scope.newCust.name = '';
            $scope.newCust.city = '';
        };
    });
})(angular);