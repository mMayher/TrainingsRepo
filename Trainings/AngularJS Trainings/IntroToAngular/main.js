
var firstModule = angular.module("firstModule", []).controller("firstController", function($scope){
    $scope.names = ['Maryan', 'Petro', 'Ivan', 'Bogdan'];   
});


var secondModule = angular.module("secondModule", []).controller("empController", function($scope){
    var employee = {
        name: 'Maryan',
        surname: 'Mayher',
        gender: 'male',
        phone: '0542343412'
    };
    
    $scope.employee = employee;
});

var thirdModule = angular.module("thirdModule", []).controller("countryController", function($scope){
    var countries = [
        {
            name: "Ukraine",
            cities: [
                {   name: "Kyiv"   },
                {   name: "Lviv"   },
                {   name: "Kharkiv"   }
            ]
        },
        {
            name: "UK",
            cities: [
                {   name: "London"   },
                {   name: "Liverpool"   },
                {   name: "Newcastle"   }
            ]
        },
        {
            name: "USA",
            cities: [
                {   name: "Dallas"   },
                {   name: "Siettle"   },
                {   name: "Florida"   }
            ]
        }
    ];
    
    $scope.countries = countries;
});

var fourthModule = angular.module("fourthModule", []).controller("techController", function($scope){
    var technologies = [
        { name:"C#", likes:0, dislikes:0 },
        { name:"ASP.NET", likes:0, dislikes:0 },
        { name:"SQL Server", likes:0, dislikes:0 },
        { name:"AngularJS", likes:0, dislikes:0 }
    ];
    
    $scope.technologies= technologies;
    
    $scope.incrementLikes = function(tech){
        tech.likes ++;   
    }
    $scope.incrementDislikes = function(tech){
        tech.dislikes ++;   
    }
});

var appModule = angular.module("appModule", ["firstModule", "secondModule", "thirdModule", "fourthModule"]);
