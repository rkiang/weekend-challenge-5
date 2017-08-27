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
    self.getRent();
}]);