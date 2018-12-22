// This file contains the routes for express

const express = require('express');
const router = express.Router();

// Get request route
router.get('/test_sjx', function(req, res){
    res.send({type: 'GET'});
});

// Post request route
router.post('/test_sjx', function(req, res){
    res.send({type: 'POST'});
});

module.exports = router;