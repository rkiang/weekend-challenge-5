app.service('SaleService', ['$http', function ($http) {
    console.log('sale.service is loaded');
    
    var self = this;

    self.saleListings = [
        list = []
    ];

    self.getSales = function () {
        console.log('ran got sales');
        $http.get('/sale').then(function (response) {
            // console.log(response);
            console.log(response.data);
            self.saleListings.list = response.data;
            console.log('getSales:', self.saleListings);
            
        });
    };
}]);