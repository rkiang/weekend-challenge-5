var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var rentSchema = new Schema({
    rent: {type: Number},
    sqft: {type: Number},
    city: {type: String}
});


module.exports = mongoose.model('rentals', rentSchema);