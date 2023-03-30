const checkPart = require('./checkPart');

test('getGiftsToRefill 1', () => {
    expect(checkPart("uwu")).toBe(true);
    // "uwu" es un palíndromo sin eliminar ningún carácter
});
test('getGiftsToRefill 2', () => {
    expect(checkPart("miidim")).toBe(true);
    // "miidim" puede ser un palíndromo después de eliminar la primera "i"
});
test('getGiftsToRefill 3', () => {
    expect(checkPart("midu")).toBe(false);
    // "midu" no puede ser un palíndromo después de eliminar un carácter
});

test('getGiftsToRefill 4', () => {
    expect(checkPart("sabcddcbas")).toBe(true);
    // "midu" no puede ser un palíndromo después de eliminar un carácter
});