const express = require('express');

var router = express.Router();


router.put("/",function(req, res) {
        res.send('PUT'); //send assumes that the response is html
                        // end assumes that the response is plain text
    });


module.exports = router;
