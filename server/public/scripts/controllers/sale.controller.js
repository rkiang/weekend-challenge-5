app.controller('SaleController', ['SaleService', function(SaleService) {
    console.log('sale.controller is loaded');
    
    var self = this;
    
    self.saleListings = SaleService.saleListings;

    self.newListing = {};

    self.addListing = function() {
        console.log('new listing button was clicked');
        SaleService.addSale(self.newListing);
        self.newListing = {}; // Clears input fields once then have been entered
    }
}])
