(function(angular){
    var app = angular.module('store', []);
    
    app.controller('StoreController', ['$http', function($http){
        var store = this;
        
        store.products = [];
        
        $http.get('/data/store-products.json').success(function(data){
            store.products = data;
        });
        
        store.order = function(predicate){
            store.reverse = (store.predicate === predicate) ? !store.reverse : false;
            store.predicate = predicate;
        }
        
        store.showOrderArrow = function (predicate){
            if(store.predicate === predicate){
                return store.reverse ? '▼' : '▲'; 
            }
            
            return '';
        }
    }]);
    
    app.controller('ReviewController', function() {
        this.review = {}; 
        
        this.addReview = function(product){
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            
            this.review = {};
        };
    });
})(angular);