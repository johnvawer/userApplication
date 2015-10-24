/**
 * Post Model
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    post;

post = new mongoose.Schema({
    title: String,
    message: String,
    userId: Number,
    id: Number
});

module.exports = {
    Post: mongoose.model('post', post)
};