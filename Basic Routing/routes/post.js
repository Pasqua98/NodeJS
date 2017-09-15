const express = require('express');

var router = express.Router();


router.post("/",function(req, res) {
        res.json({prop: 'JSON_RESPONSE', prop2: 3}); //json returns a json object
    });


module.exports = router;
