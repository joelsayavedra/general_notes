function checkJump(heights){
    let maxValue = Math.max(...heights);
    let goingUp = true;
    let lastValue = 0;
    let sameHeightCounter = 0;
    for(let h of heights){
        if(h === lastValue){sameHeightCounter++;}
        if(h === maxValue){
            goingUp=false
            lastValue = h;
            continue;
        }
        if(h<lastValue && goingUp){return false}
        if(h>lastValue && !goingUp){return false}
        lastValue = h;
    }
    return !(sameHeightCounter >= heights.length-1) && (!goingUp);
}

module.exports = checkJump;