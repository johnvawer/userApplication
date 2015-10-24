var express = require('express'),
    router = express.Router(),
    comment = require('../models/comment');

/**
 * Get request for users
 */
router.get('/', function(req, res) {
    var postId = req.query.postId
    comment.Comment.find({
        postId: postId
    }, function(err, comments) {
        res.json(comments);
    })
});

module.exports = router;