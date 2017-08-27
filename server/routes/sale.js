var express = require('express');
var router = express.Router();
var Sale = require('../models/sale.schema.js');

router.get('/', function(req, res) {
    Sale.find({}, function(err, data) {
        if (err) {
            console.log('find error: ', err);
            res.sendStatus(500);
        } else {
            console.log('found data: ', data);            
            res.send(data);
        }
    });
});

module.exports = router;