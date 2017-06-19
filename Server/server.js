var express = require('express');
var app = express();
var esprima = require('esprima');
var bodyParser = require("body-parser");
var mongoOp = require("./mongo");
var router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended": false }));

// endpoint to get/post scores of all users
router.route("/highscores")
    .get(function (req, res) {
        var response = {};
        mongoOp.find({}, function (err, data) {
            if (err) {
                response = { "error": true, "message": "Error fetching data" };
            } else {
                response = { "error": false, "message": data };
            }
            res.send(response);
        });
    })

    .post(function (req, res) {
        var db = new mongoOp();
        var response = {};

        db.name = req.body.name;
        db.task = req.body.task;
        db.completeTries = req.body.completeTries;
        db.oxygen = req.body.oxygen;

        db.save(function (err) {
            if (err) {
                response = { "error": true, "message": "Error adding data" };
            } else {
                response = { "error": false, "message": "Data added" };
            }
            res.json(response);
        });
    });

// endpoint for code analyse requests
app.get('/api/user/tok/:code', function (req, res) {
    if (isNaN(req.params.code.charAt(0))) {
        res.json(esprima.tokenize(req.params.code));
    } else {
        console.log("error_leadingnumber")
        res.json(
            [
                {
                    "type": "error",
                    "value": "LeadingNumbers"
                }
            ])
    }
});

// endpoint for parse user code
app.get('/api/user/parse/:code', function (req, res) {
    res.send(esprima.parse(req.params.code));
});

app.use('/', router);

app.listen(3000);
console.log("Listening to PORT 3000");
