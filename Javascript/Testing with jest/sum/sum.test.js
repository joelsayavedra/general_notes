const sum = require('./sum');

let dataSet1 = {
  data1: {
    tasa: '12.00',
    base: '130.58',
    monto: '15.66',
  },
  data2: '130.59',
  expected: {
    tasa: '12.00',
    base: '130.59',
    monto: '15.66',
  }
}

let dataSet2 = {
  data1: '27.00',
  data2: '27.00',
  expected: '27.00'
}

test('Prueba con set 1', () => {
  expect(sum(dataSet1.data1,dataSet1.data2)).toStrictEqual(dataSet1.expected);
});

test('Prueba con set 2', () => {
  expect(sum(dataSet2.data1,dataSet2.data2)).toBe(dataSet2.expected);
});