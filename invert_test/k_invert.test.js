const k_invert = require('./k_invert');

test('troppi parametri', () => {
    var a = [1, 3, 2, 6, 22];
    expect(k_invert(a, 5, 3)).toEqual(null);
});

test('troppo pochi parametri', () => {
    var a = [1, 3, 2, 6, 22];
    expect(k_invert(a)).toEqual(null);
});

test('sposta tutto l\'array', () => {
    var a = [1, 3, 2, 6, 22];
    expect(k_invert(a, 5)).toEqual([1, 3, 2, 6, 22]);
});

test('non spostare nulla', () => {
    expect(k_invert([1, 3, 2, 6, 22], 0)).toEqual([1, 3, 2, 6, 22]);
});

test('spostane 3', () => {
    expect(k_invert([1, 3, 2, 6, 22], 3)).toEqual([2, 6, 22, 1, 3]);
});

test('cerca di spostarne troppi', () => {
    expect(k_invert([1, 3, 2, 6, 22], 6)).toEqual(null);
});

test('cerca di spostarne troppi', () => {
    expect(k_invert([], 2)).toEqual(null);
});

test('l\'array non è di soli interi positivi', () => {
    var b = [1, 0, 2, 3]
    expect(k_invert(b, 3)).toEqual(null);
});

test('l\'array non è di soli interi positivi', () => {
    var c = [1, -1, 2, 3]
    expect(k_invert(c, 3)).toEqual(null);
});

test('k non è un intero positivo', () => {
    var d = [1, 4, 2, 3]
    expect(k_invert(d, -3)).toEqual(null);
});

test('l\'array ha almeno un non numero', () => {
    var e = [1, 'a', 3, 4]
    expect(k_invert(e, 3)).toEqual(null);
});

test('l\'array non è composto di soli interi', () => {
    var f = [1, 1.25, 3, 4]
    expect(k_invert(f, 3)).toEqual(null);
});

test('l\'array non è un array', () => {
    var g = 42
    expect(k_invert(g, 3)).toEqual(null);
});

test('l\'array è vuoto', () => {
    var h = []
    expect(k_invert(h, 0)).toEqual([]);
});