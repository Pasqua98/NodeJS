var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:placeholder', function(req, res, next) {
res.end("Hello "+req.params.placeholder);
});

module.exports = router;
