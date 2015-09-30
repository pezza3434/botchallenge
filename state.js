var opponentName = '';

var cardMap = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    'T': 10,
    'J': 11,
    'Q': 12,
    'k': 13,
    'A': 14
};

var latestCard;

module.exports = {
    setName: function(name) {
        opponentName = name;
    },
    getName: function () {
        return opponentName;
    },
    setCard: function (card) {
        latestCard = card;
    },
    getCard: function () {
        console.log(latestCard, 'latestcard');
        return cardMap[latestCard];
    }

}
