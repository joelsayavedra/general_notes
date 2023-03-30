const distributeGifts = require('./countHours');

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

test('El resultado debe ser un número', () => {
    expect(typeof distributeGifts(packOfGifts, reindeers)).toBe('number');
});

test('Dataset 1', () => {
    expect(distributeGifts(packOfGifts, reindeers)).toBe(2);
});




