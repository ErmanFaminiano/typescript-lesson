const functions = require('./function');

test('Adds 2 + 2 equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});