var express = require('express');
var app = express();
var esprima = require('esprima');

// endpoint for code analyse requests
app.get('/api/user/tok/:code', function(req, res) {
    if(isNaN(req.params.code.charAt(0))){
        res.json(esprima.tokenize(req.params.code));
    } else {
        console.log("error_leadingnumber")
        res.json([
            {
               "type": "error",
               "value": "Leading numbers are not allowed"
            }
            ])
    } 
});

// endpoint for parse user code
app.get('/api/user/parse/:code', function(req,res) {
    res.json(esprima.parse(req.params.code));
});

app.listen(3000, function () {
  console.log('JSpace server started on port 3000!');
});
