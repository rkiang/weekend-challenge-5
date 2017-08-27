app.controller('SaleController', ['SaleService', function(SaleService) {
    console.log('sale.controller is loaded');
    
    var self = this;
    // SaleService.getSales();
    self.saleListings = SaleService.saleListings;
}])
