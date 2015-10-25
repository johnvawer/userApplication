var express = require('express'),
    router = express.Router(),
    post = require('../models/post'),
    mongoose = require('mongoose');

/**
 * Get request for posts
 */
router.get('/', function(req, res) {
    var userId = req.query.userId;

    if (mongoose.connection.readyState !== 0) {
        post.Post.find({
                userId: userId
            },
            function(err, posts) {
                res.json(posts);
            });
    } else {
        res.send('Unable to connect to MongoDB');
    }
});

module.exports = router;