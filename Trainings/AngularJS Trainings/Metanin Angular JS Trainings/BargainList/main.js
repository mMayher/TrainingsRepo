var model = {
    items: [
        { purchase: "Bread", done: false, price: 15.9 },
        { purchase: "Ise-cream", done: false, price: 60 },
        { purchase: "Potato", done: true, price: 22.6 },
        { purchase: "Cheese", done: false, price:310 }
    ]
};

var purchaseApp = angular.module('purchaseApp', []);

purchaseApp.controller('purchaseController', function($scope){
    $scope.list = model;
    
    $scope.addItem = function(text, price){
        if(text != '' && !isNaN(price)){
            $scope.list.items.push({purchase: text, price: price, done: false});
            $scope.text = $scope.price = '';
        }
    };
})