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

router.post('/', function(req, res) {
    var userModel = new user.User(req.body);

    userModel.save(function(err, newUser) {
        res.json(newUser);
    });
});

module.exports = router;