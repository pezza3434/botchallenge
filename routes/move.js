var express = require('express');
var router = express.Router();
var state = require('../state');
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {

    var chipCount = state.getChipCount();

    var opponentHasBet = function () {
        return state.getOpponentMove() !== 'CALL' && state.getOpponentMove() !== 'FOLD';
    }

    function log(response) {
        fs.appendFile('updatelog.txt', 'Response: ' + response + '\n', function (err) {
          if (err) throw err;
        });
    }

    if(state.getName() === 'Defensor') {

        if(state.getCard() > 12) {
            state.triggerNextRound();
            log('BET:' + chipCount);
            return res.send('BET:' + chipCount);
        }

        if(state.getCard() < 7) {
            state.triggerNextRound();
            log('CALL');
            return res.send('CALL');
        }

        if(state.getCard() < 4) {
            state.triggerNextRound();
            log('FOLD');
            return res.send('FOLD');
        }

        state.triggerNextRound();
        log('BET:50');
        return res.send('BET:50');
    }

    if(state.getName() === 'pokerstick') {

        state.triggerNextRound();
        log('BET:' + chipCount);
        return res.send('BET:' + chipCount);
    }



    if (state.getCard() === 14) {
        state.triggerNextRound();
        log('BET:' + chipCount);
        return res.send('BET:' + chipCount);
    }

    if (state.getCard() === 13) {
        state.triggerNextRound();
        log('BET:' + chipCount);
        return res.send('BET:' + chipCount)
    }

    if (state.getCard() === 12) {
        state.triggerNextRound();
        log('BET:' + chipCount);
        return res.send('BET:' + chipCount)
    }

    if (state.getRound() === 0 && state.getBlind()) {

        if(opponentHasBet()) {
            state.triggerNextRound();
            log('FOLD');
            return res.send('FOLD');
        }

        state.triggerNextRound();
        log('CALL');
        return res.send('CALL');
    }

    if (state.getCard() === 8) {

        if(opponentHasBet()) {
            state.triggerNextRound();
            log('FOLD');
            return res.send('FOLD')
        }else {
            state.triggerNextRound();
            log('CALL');
            return res.send('CALL')
        }

    }

    if (state.getCard() < 9) {
        state.triggerNextRound();
        log('FOLD');
        return res.send('FOLD')
    }

    state.triggerNextRound();
    log('CALL');
    return res.send('CALL')
});

module.exports = router;
