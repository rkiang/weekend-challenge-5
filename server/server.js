var express = require('express');

var app = express();

var bodyParser = require('body-parser');

// var path = require('path');

var mongoose = require('mongoose');

var sale = require('./routes/sale.js');
var rent = require('./routes/rent.js');

var port = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.json());

app.use('/sale', sale);
app.use('/rent', rent)

var databaseUrl = 'mongodb://localhost:27017/realestate';
mongoose.connect(databaseUrl, 
{
    useMongoClient: true
});


app.listen(port, function () {
    console.log('Listening on port:', port);
});
