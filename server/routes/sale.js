var express = require('express');
var router = express.Router();
var Sale = require('../models/sale.schema.js');

router.get('/', function(req, res) {
    console.log('GET route hit');
    Sale.find({}, function(err, data) {
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