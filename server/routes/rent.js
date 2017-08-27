var express = require('express');
var router = express.Router();
var Rent = require('../models/rent.schema.js');

router.get('/', function(req, res) {
    console.log('GET route hit');
    Rent.find({}, function(err, data) {
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
    console.log('rent.js router.post was hit');
    var newRent = new Rent(req.body);
    newRent.save(function(err, data) {
        console.log('saved rent listing to the collection: ', data);
        if(err) {
            console.log('save error: ', err);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        };
    });
});

module.exports = router;