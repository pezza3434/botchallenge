var express = require('express');
var router = express.Router();
var fs = require('fs');
var state = require('../state');

/* GET users listing. */
router.post('/', function(req, res, next) {
    fs.appendFile('updatelog.txt', state.getName() + JSON.stringify(req.body) + '\n', function (err) {
      if (err) throw err;
    });

    if (req.body.COMMAND === 'CARD') {
        state.setCard(req.body.DATA)
    }

    if(req.body.COMMAND === 'POST_BLIND') {
        state.setBlind(true);
    }

    if(req.body.COMMAND === 'RECEIVE_BUTTON') {
        state.setBlind(false);
    }

  res.json({message: 'update route'})
});

module.exports = router;
