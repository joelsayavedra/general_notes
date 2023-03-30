function distributeGifts(packOfGifts, reindeers) {
    let maxWeight = reindeers.reduce((accum, reindeer) => {
        return accum + reindeer.length * 2;
    }, 0);

    let packWeigth = packOfGifts.reduce((accum, gift) => {
        return accum + gift.length;
    }, 0);

    return Math.floor(maxWeight / packWeigth);
}

module.exports = distributeGifts;

