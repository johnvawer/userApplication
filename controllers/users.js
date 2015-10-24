var user = require('../models/user'),
    express = require('express'),
    router = express.Router();

/**
 * Get request for users
 */
router.get('/', function(req, res) {
    user.User.find(function(err, users) {
        res.json(users);
    });
});

module.exports = router;