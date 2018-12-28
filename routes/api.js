// This file contains the routes for express

const express = require('express');
const router = express.Router();

// Get request route
router.get('/test_sjx', (req, res) => {
    res.send({type: 'GET'});
});

// Post request route
router.post('/test_sjx', (req, res) => {
    res.send({type: 'POST'});
    console.log("post conducted");

    // req.query pulls the params of the params sent
    console.log(req.query);
    console.log(req.body);
});

module.exports = router;