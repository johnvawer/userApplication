/**
 * User Model
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    user;

user = new mongoose.Schema({
    username: String,
    first_name: String,
    surname: String,
    password: String,
    email: String,
    account_type: String
});

module.exports = {
    User: mongoose.model('user', user)
};