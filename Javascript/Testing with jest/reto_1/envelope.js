function envelope(gifts) {
    let wrapped = [];
    for(let gift of gifts){
        let init = ''.padStart(gift.length+2,'*');
        wrapped.push(init+'\n*'+gift+'*\n'+init);
    }
    return wrapped;
}

module.exports = envelope;