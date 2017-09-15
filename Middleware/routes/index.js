var express = require('express');
var router = express.Router();

//Firstly we need to request the time to the server
var requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next() //pass the token to the next method
}

//Load the function (a function can also be imported from somewhere else)
router.use(requestTime)

//Send a GET request and embed the result in html code
router.get('/', function (req, res) {
  var responseText = '<h1>Hello World!</h1>'
  responseText += 'Requested at: ' + req.requestTime + ''
  res.send(responseText)
})


module.exports = router;
