var express = require('express');
var router = express.Router();
var fs = require('fs');
var state = require('../state');

/* GET users listing. */
router.post('/', function(req, res, next) {

    fs.appendFile('startlog.txt', state.getName() + '\n' + JSON.stringify(req.body) + '\n', function (err) {
      if (err) throw err;
    });

    state.setName(req.body.OPPONENT_NAME);

  res.json({message: 'post start'})
});

module.exports = router;
