var express = require('express'),
    router = express.Router(),
    commentData = require('../data/comments.json');

/**
 * Get request for users
 */
router.get('/', function(req, res) {
    res.send(commentData);
});

module.exports = router;