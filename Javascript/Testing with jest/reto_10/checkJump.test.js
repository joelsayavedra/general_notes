const checkJump = require('./checkJump');

test('checkJump 1', () => {
    const heights = [1, 3, 8, 5, 2]
    expect(checkJump(heights)).toBe(true);
});

test('checkJump 2', () => {
    const heights = [1, 7, 3, 5]
    expect(checkJump(heights)).toBe(false);
});

test('checkJump 3', () => {
    expect(checkJump([2, 2, 2, 2])).toBe(false);
});

test('checkJump 4', () => {
    expect(checkJump([1, 2, 3])).toBe(false);
});