var express = require('express');
var router = express.Router();
var Sale = require('../models/sale.schema.js');

router.get('/', function(req, res) {
    // console.log('GET route hit');
    Sale.find({}, function(err, data) {
        if (err) {
            console.log('find error: ', err);
            res.sendStatus(500);
        } else {
            // console.log('found data: ', data, err);            
            res.send(data);
        }
    });
});

router.post('/', function(req, res) {
    console.log('sale.js router.post was hit');
    var newSale = new Sale(req.body);
    newSale.save(function(err, data) {
        console.log('saved sale listing to the collection: ', data);
        if(err) {
            console.log('save error: ', err);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        };
    });
});

module.exports = router;