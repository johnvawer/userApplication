var express = require('express'),
    router = express.Router(),
    comment = require('../models/comment'),
    mongoose = require('mongoose');

/**
 * Get request for comments
 */
router.get('/', function(req, res) {
    var postId = req.query.postId
    if (mongoose.connection.readyState !== 0) {
        comment.Comment.find({
            postId: postId
        }, function(err, comments) {
            res.json(comments);
        })
    } else {
        res.send('Unable to connect to MongoDB');
    }
});

module.exports = router;