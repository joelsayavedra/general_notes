function checkPart(part) {
    let esPalindromo = (string) => {
        let l = string.length;
        let left = string.split('').slice(0,Math.ceil(l / 2));
        let right = string.split('').slice(Math.floor(l / 2),l).reverse();
        return left.join('') === right.join('');
    }

    if (esPalindromo(part)) { return true; }

    let result = [];
    for (let i = 0; i < part.length; i++) {
        let wordArr = part.split('');
        wordArr.splice(i, 1);
        result.push(esPalindromo(wordArr.join('')));
    }

    return result.includes(true) ? true : false;
}
module.exports = checkPart;