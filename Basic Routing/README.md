#Routing
For each HTTP command there is an equivalent node command e.g.

GET
app.get("/",function()...);

POST
app.post("/",function()...);

To run other requests than get use Postman https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en

To acquire parameters from the url and provinding routes: 

router.get('/:placeholder', function(req, res, next) {
res.end("Hello "+req.params.placeholder);
});

If you need to pass them as simple params;
e.g. website.com/home?name=abc
router.get('/:placeholder', function(req, res, next) {
res.end("Hello "+req.query.placeholder);
});

To learn more of http methods:
https://www.tutorialspoint.com/http/http_methods.htm
