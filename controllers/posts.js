var express = require('express'),
    router = express.Router(),
    postsData = require('../data/posts.json');

/**
 * Get request for users
 */
router.get('/', function(req, res) {
    res.send(postsData);
});

module.exports = router;