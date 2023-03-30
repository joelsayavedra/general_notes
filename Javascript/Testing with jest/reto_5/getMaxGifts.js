function getMaxGifts(giftsCities, maxGifts, maxCities) {

    giftsCities.sort((a, b) => {
        if (a === b) { return 0 }
        return a < b ? 1 : -1;
    });

    let values = [];

    for (let i = 0; i < giftsCities.length; i++) {
        for (let j = 0; j < giftsCities.length; j++) {
            if (j === i) { continue; }
            for (let k = 0; k < giftsCities.length; k++) {
                if (k === i || k === j) { continue; }
                let sum = giftsCities[i] + giftsCities[j] + giftsCities[k]
                if (sum === maxGifts) { return sum }
                else if (sum <= maxGifts) { values.push(sum) }
            }
        }
    }

    values.sort((a, b) => {
        if (a === b) { return 0 }
        return a < b ? 1 : -1;
    });

    return values[0] || 0;
}

module.exports = getMaxGifts;