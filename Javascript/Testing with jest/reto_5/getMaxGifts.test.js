const getMaxGifts = require('./getMaxGifts');



test('test 1', () => {
    const giftsCities = [12, 3, 11, 5, 7]
    const maxGifts = 20
    const maxCities = 3
    expect(getMaxGifts(giftsCities, maxGifts, maxCities)).toBe(20);
});

test('test 2', () => {
    expect(getMaxGifts([50], 100, 1)).toBe(50);
});

test('test 3', () => {
    const giftsCities = [12, 3, 1, 5, 7]
    const maxGifts = 20
    const maxCities = 3
    expect(getMaxGifts(giftsCities, maxGifts, maxCities)).toBe(20);
});