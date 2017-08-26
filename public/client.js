var app = angular.module('EstateApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/home.html'
    }).when('/sale', {
        templateUrl: '/views/sale.html',
        // controller: 'SaleController as vm'
    }).when('/rent', {
        templateUrl: '/views/rent.html',
        // controller: 'RentController as vm'
    });
}]);