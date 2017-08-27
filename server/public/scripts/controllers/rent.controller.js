app.controller('RentController', ['RentService', function(RentService) {
    console.log('rent.controller is loaded');
    
    var self = this;
    self.rentListings = RentService.rentListings;
}])
