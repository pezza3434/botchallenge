var express = require('express');
var router = express.Router();
var state = require('../state');

/* GET users listing. */
router.get('/', function(req, res, next) {

    console.log(state.getCard());

    if (state.getCard() < 9) {
        return res.send('FOLD')
    }

    return res.send('CALL')
});

module.exports = router;
