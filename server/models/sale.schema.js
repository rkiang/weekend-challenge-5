var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var saleSchema = new Schema({
    price: {type: Number},
    size: {type: Number},
    location: {type: String},
});


module.exports = mongoose.model('Sale', saleSchema);