app.service('SaleService', ['$http', function ($http) {
    console.log('sale.service is loaded');
    
    var self = this;

    self.saleListings = {
        list: []
    };

    self.getSales = function () {
        // console.log('ran got sales');
        $http.get('/sale').then(function (response) {
            // console.log(response);
            console.log(response.data);
            self.saleListings.list = response.data;
            console.log('getSales:', self.saleListings.list);
            
        });
    };

    self.addSale = function(newListing) { 
        console.log('addSale is: ', newListing);
               
        $http.post('/sale', newListing).then(function(response) {
            console.log('sale.service response: ', response);
            self.getSales();            
        });
    };


    self.getSales();
}]);