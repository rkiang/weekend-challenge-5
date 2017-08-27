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
            console.log('found data: ', data, err);            
            res.send(data);
        }
    });
});

module.exports = router;