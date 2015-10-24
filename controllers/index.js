/**
 * Basic Index view. Navigating to http://localhost:3000
 * will render this view
 */
var express = require('express'),
    router = express.Router();

router.use('/user', require('./user'));

/**
 * 
 */
router.get('/', function(req, res) {
    res.sendFile('app/index.html', {
        root: './public/'
    });
});

/**
 *
 */
router.get('/teststl', function(req, res) {
    // get file as array buffer and respond with contents
    var fs = require('fs');

    fs.readFile('public/stl/Gnome.stl', function(err, data) {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        }

        return res.status(200).send(data);

    });

});

module.exports = router;