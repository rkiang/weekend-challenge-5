var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var saleSchema = new Schema({
    cost: {type: Number},
    sqft: {type: Number},
    city: {type: String}
});


module.exports = mongoose.model('listings', saleSchema);