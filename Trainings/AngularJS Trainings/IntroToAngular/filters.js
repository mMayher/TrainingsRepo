(function (angular) {
    angular.module("appModule", []).controller("filterController", function ($scope) {
        var employees = [
          {
                name: 'Maryan'
                , dateOfBirth: new Date('03/14/1995')
                , gender: "Male"
                , salary: 4400
            }, {
                name: 'Ivan'
                , dateOfBirth: new Date('11/04/1997')
                , gender: "Male"
                , salary: 2400
            },{
                name: 'Anna'
                , dateOfBirth: new Date('09/08/1993')
                , gender: "Female"
                , salary: 3200
            },{
                name: 'Petro'
                , dateOfBirth: new Date('05/14/1985')
                , gender: "Male"
                , salary: 1900
            }
        ];
        $scope.employees = employees;
        $scope.rowLimit = 2;
        $scope.sortOption = "name";
    })
})(angular);