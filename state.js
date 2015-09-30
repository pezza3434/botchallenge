var cardMap = require('./cardMap');

var opponentName;
var latestCard;
var bigBlind;

module.exports = {
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
    }
}
