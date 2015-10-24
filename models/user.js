/**
 * User Model
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    user;

user = new mongoose.Schema({
    username: String,
    name: String,
    email: String,
    id: Number
});

module.exports = {
    User: mongoose.model('user', user)
};