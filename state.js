var cardMap = require('./cardMap');
var fs = require('fs');

var opponentName;
var latestCard;
var bigBlind;
var currentChipCount;
var currentRound = 0;
var opponentMove;


module.exports = {
    triggerNextRound: function () {
        currentRound++;
    },
    resetRound: function () {
        currentRound = 0;
    },
    getRound: function () {
        return currentRound;
    },
    setName: function(name) {
        opponentName = name;
    },
    getName: function () {
        if(opponentName) {
            return opponentName;
        }
        return 'no opponent name';
    },
    setCard: function (card) {
        fs.appendFile('cards.txt', card + '\n', function (err) {
          if (err) throw err;
        });

        latestCard = card;
    },
    getCard: function () {
        if(cardMap[latestCard]) {
            return cardMap[latestCard];
        }
            return 0;
    },
    setBlind: function (blindStatus) {
        bigBlind = blindStatus;
    },
    getBlind: function () {
        return bigBlind;
    },
    setChipCount: function (chips) {
        currentChipCount = chips;
    },
    getChipCount: function () {
        return currentChipCount.toString();
    },
    setOpponentMove: function (move) {
        opponentMove = move;
    },
    getOpponentMove: function () {
        return opponentMove;
    }
}
