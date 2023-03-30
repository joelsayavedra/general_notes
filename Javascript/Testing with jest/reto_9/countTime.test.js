const countTime = require('./countTime');


test('countTime 1', () => {
    expect(countTime([0, 1, 1, 0, 1])).toBe(7);
    // "uwu" es un palíndromo sin eliminar ningún carácter
});
test('countTime 2', () => {
    expect(countTime([0, 0, 0, 1])).toBe(21);
    // "uwu" es un palíndromo sin eliminar ningún carácter
});
test('countTime 3', () => {
    expect(countTime([0, 0, 1, 0, 0])).toBe(28);
    // "uwu" es un palíndromo sin eliminar ningún carácter
});