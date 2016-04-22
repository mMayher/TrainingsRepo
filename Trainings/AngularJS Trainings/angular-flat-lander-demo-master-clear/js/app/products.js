(function (angular) {
    var app = angular.module('store');
    //product-title - provide by angular
    app.directive('productTitle', function () {
        return {
            restrict: 'EA',
            //what type of directive we create(E-element
            templateUrl: 'views/product-title.html'
        };
    });

    app.directive('productGallery', function () {
        return {
            restrict: 'E',
            templateUrl: '/views/product-gallery.html',
            controller: function () {
                this.current = 0;
                this.setCurrent = function (img) {
                    this.current = img || 0;
                }
            },
            controllerAs: 'gallery'
        };
    })
    
    app.directive('productPanels', function() {
        return {
            restrict: 'E',
            templateUrl: '/views/product-panels.html',
            controller: function() {
                this.tab = 1;
                
                this.isSelected = function (tab){
                    return this.tab === tab;   
                }
                
                this.setTab = function(tab){
                    this.tab = tab;   
                }
            },
            controllerAs: 'panel'
        };
    });
})(angular);