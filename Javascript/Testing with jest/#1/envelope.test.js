const envelope = require('./envelope');

const gifts = ['cat', 'game', 'socks', 'bike','calculator']
const wrapped = [
    "*****\n*cat*\n*****",
    "******\n*game*\n******",
    "*******\n*socks*\n*******",
    "******\n*bike*\n******",
    "************\n*calculator*\n************",
];

test('test 1', () => {
    expect(envelope(gifts)[0]).toStrictEqual(wrapped[0]);
});

test('test 2', () => {
    expect(envelope(gifts)).toStrictEqual(wrapped);
});

