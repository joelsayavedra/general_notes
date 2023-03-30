function countTime(leds) {
    const secs = 7;

    let cycles = 0;
    while (leds.includes(0)) {
        cycles++;
        let ledStatus = {}
        for (let i = 0; i < leds.length; i++) {
            let cond = i === 0 ?
                leds[leds.length - 1] === 1 :
                leds[i - 1] === 1;

            if (cond) { ledStatus[i] = 1 }
        }
        for (let i = 0; i < leds.length; i++) {
            let keys = Object.keys(ledStatus);
            if (keys.includes(String(i))) {
                leds[i] = ledStatus[i];
            }
        }
    }

    return secs * cycles;
}

module.exports = countTime;