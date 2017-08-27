app.controller('RentController', ['RentService', function (RentService) {
    console.log('rent.controller is loaded');

    var self = this;
    self.rentListings = RentService.rentListings;

    self.newRent = {};

    self.addRent = function () {
        console.log('new rent button was clicked');
        RentService.addRent(self.newRent);
        self.newRent = {}; // Clears input fields once then have been entered
    }
}])
