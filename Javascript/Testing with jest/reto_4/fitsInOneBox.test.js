const fitsInOneBox = require('./fitsInOneBox');

test('Caso 1: dos cajas en orden', () => {
    let case1 = [
        { l: 1, w: 1, h: 1 },
        { l: 2, w: 2, h: 2 }
    ];
    expect(fitsInOneBox(case1)).toBe(true);
});

test('Caso 2: tres cajas en orden. hay dos que no caben en ninguna', () => {
    let case2 = [
        { l: 1, w: 1, h: 1 },
        { l: 2, w: 2, h: 2 },
        { l: 3, w: 1, h: 3 }
    ];
    expect(fitsInOneBox(case2)).toBe(false);
});

test('Caso 3: tres cajas desordenadas.', () => {
    let case3 = [
        { l: 1, w: 1, h: 1 },
        { l: 3, w: 3, h: 3 },
        { l: 2, w: 2, h: 2 }
    ];
    expect(fitsInOneBox(case3)).toBe(true);
});


test('Caso 4: tres cajas desordenadas.', () => {
    let case4 = [
        { l: 1, w: 1, h: 10 },
        { l: 3, w: 3, h: 12 },
        { l: 2, w: 2, h: 1 },
    ];
    expect(fitsInOneBox(case4)).toBe(false);
});

test('Caso 5: tres cajas iguales.', () => {
    let case4 = [
        { l: 1, w: 1, h: 1 },
        { l: 1, w: 1, h: 1 },
        { l: 1, w: 1, h: 1 },
    ];
    expect(fitsInOneBox(case4)).toBe(false);
});
