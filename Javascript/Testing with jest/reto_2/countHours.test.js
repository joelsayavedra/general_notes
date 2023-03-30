const countHours = require('./countHours');

const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

test('El resultado debe ser un número', () => {
    expect(typeof countHours(year, holidays)).toBe('number');
});

test('test bisiesto 2', () => {
    expect(countHours(year, holidays)).toBe(4);
});

test('test bisiesto 2', () => {
    expect(countHours(1985,['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25'])).toBe(10);
});

