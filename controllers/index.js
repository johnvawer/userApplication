/**
 * Basic Index view. Navigating to http://localhost:3000
 * will render this view
 */
var express = require('express'),
    router = express.Router();

router.use('/users', require('./users'));
router.use('/posts', require('./posts'));
router.use('/comments', require('./comments'));

/**
 * 
 */
router.get('/', function(req, res) {
    res.sendFile('index.html', {
        root: './public/'
    });
});

module.exports = router;