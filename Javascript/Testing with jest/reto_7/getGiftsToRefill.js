function getGiftsToRefill(a1, a2, a3) {
    function uniqueComparison(val, i, array) {
        return array.indexOf(val) === i;
    };

    let uniqueGifts = [...a1,...a2,...a3]
    uniqueGifts = uniqueGifts.filter(uniqueComparison);

    let result = [];
    for(let gift of uniqueGifts){
        let incidences = 0;
        if (a1.includes(gift)) { incidences++ }
        if (a2.includes(gift)) { incidences++ }
        if (a3.includes(gift)) { incidences++ }
        if(incidences === 1){result.push(gift)}
    }

    return result;
}
module.exports = getGiftsToRefill;