var user = require('../models/user'),
    express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose');

/**
 * Get request for users
 */
router.get('/', function(req, res) {
    if (mongoose.connection.readyState !== 0) {
        user.User.find(function(err, users) {
            res.json(users);
        });
    } else {
        res.send('Unable to connect to MongoDB');
    }
});

module.exports = router;