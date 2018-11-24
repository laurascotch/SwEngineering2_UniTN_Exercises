const k_invert = require('./k_invert');

var a = [1, 3, 2, 6, 22];

test('sposta tutto l\'array', () => {
    expect(k_invert(a, 5)).toBe([1, 3, 2, 6, 22]);
});

test('non spostare nulla', () => {
    expect(k_invert(a, 5)).toBe([1, 3, 2, 6, 22]);
});

test('spostane 3', () => {
    expect(k_invert(a, 3)).toBe([2, 6, 22, 1, 3]);
});

test('cerca di spostarne troppi', () => {
    expect(k_invert(a, 6)).toBe(null);
});

var b = [1, 0, 2, 3]

test('l\'array non è di soli interi positivi', () => {
    expect(k_invert(b, 3)).toBe(null);
});

var c = [1, -1, 2, 3]

test('l\'array non è di soli interi positivi', () => {
    expect(k_invert(c, 3)).toBe(null);
});

var b = [1, 4, 2, 3]

test('k non è un intero positivo', () => {
    expect(k_invert(b, -3)).toBe(null);
});