const k_invert = require('./k_invert');

var a = [1, 3, 2, 6, 22];

test('sposta tutto l\'array', () => {
    expect(k_invert([1, 3, 2, 6, 22], 5)).toEqual([1, 3, 2, 6, 22]);
});

test('non spostare nulla', () => {
    expect(k_invert([1, 3, 2, 6, 22], 0)).toEqual(null);
});

test('spostane 3', () => {
    expect(k_invert([1, 3, 2, 6, 22], 3)).toEqual([2, 6, 22, 1, 3]);
});

test('cerca di spostarne troppi', () => {
    expect(k_invert([1, 3, 2, 6, 22], 6)).toEqual(null);
});

var b = [1, 0, 2, 3]

test('l\'array non è di soli interi positivi', () => {
    expect(k_invert(b, 3)).toEqual(null);
});

var c = [1, -1, 2, 3]

test('l\'array non è di soli interi positivi', () => {
    expect(k_invert(c, 3)).toEqual(null);
});

var d = [1, 4, 2, 3]

test('k non è un intero positivo', () => {
    expect(k_invert(d, -3)).toEqual(null);
});