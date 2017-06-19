var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/db');
var mongoSchema = mongoose.Schema;

var userSchema = {
    "name": String,
    "task": Number,
    "completeTries": Number,
    "oxygen": Number
};

module.exports = mongoose.model('userLogin', userSchema);