var express = require('express'),
    router = express.Router(),
    post = require('../models/post');

/**
 * Get request for posts
 */
router.get('/', function(req, res) {
    var userId = req.query.userId;

    post.Post.find({
            userId: userId
        },
        function(err, posts) {
            res.json(posts);
        });
});

module.exports = router;