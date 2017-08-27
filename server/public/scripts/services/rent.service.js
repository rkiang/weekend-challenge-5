app.service('RentService', ['$http', function ($http) {
    console.log('rent.service is loaded');
    
    var self = this;

    self.rentListings = {
        list: []
    };

    self.getRent = function () {
        console.log('ran got sales');
        $http.get('/rent').then(function (response) {
            // console.log(response);
            console.log(response.data);
            self.rentListings.list = response.data;
            console.log('getRent:', self.rentListings.list);
            
        });
    };

    self.addRent = function(newRent) { 
        console.log('addRent is: ', newRent);
               
        $http.post('/rent', newRent).then(function(response) {
            console.log('rent.service response: ', response);
            self.getRent();            
        });
    };

    self.getRent();
}]);