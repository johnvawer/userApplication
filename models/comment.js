/**
 * Comment Model
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    comment;

comment = new mongoose.Schema({
    name: String,
    postId: Number,
    id: Number,
    text: String
});

module.exports = {
    Comment: mongoose.model('comment', comment)
};