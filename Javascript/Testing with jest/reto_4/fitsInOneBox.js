function fitsInOneBox(boxes) {
    let fitsCompare = (c1, c2) => {
        let result = (c1.l < c2.l) && (c1.w < c2.w) && (c1.h < c2.h) ? -1 : 1;
        if ((c1.l === c2.l) && (c1.w === c2.w) && (c1.h === c2.h)) { return 0 }
        return result;
    };
    let fitsIn = (c1, c2) => (c1.l < c2.l) && (c1.w < c2.w) && (c1.h < c2.h);

    let sortedBoxes = boxes.sort(fitsCompare);
    for (let i = 0; i < sortedBoxes.length - 1; i++) {
        let doesntFitInNextBox = !fitsIn(sortedBoxes[i],sortedBoxes[i+1])
        if (doesntFitInNextBox) { return false }
    }

    return true;
}
 module.exports = fitsInOneBox;