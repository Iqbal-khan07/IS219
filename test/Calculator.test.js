const Calcultor = require("../utils/Calculator/Calculator")

test('Calculator addition 2 + 2 = 4 ', () => {
    const cal = new Calcultor();
    expect(cal.add(2, 2)).toBe(4);
    expect(cal.results).toBe(4);
})

test("Calculator addition '2' + 2 = 4 ", () => {
    const cal = new Calcultor();
    expect(() => {cal.add('2', 2)}).toThrowError("Inputs must be numbers");
})

test("Calculator addition [1, 2, 3, 4] ", () => {
    const cal = new Calcultor();
    expect(cal.add([1, 2, 3, 4])).toBe(10);
    expect(cal.results).toBe(10);
})


test("Calculator addition '2' + 2 = 4 ", () => {
    const cal = new Calcultor();
    expect(() => {cal.add(['1', 2, 3])}).toThrowError("Input Must be a Integer array");
})

test('Calculator subtract 2 - 2 = 0 ', () => {
    const cal = new Calcultor();
    expect(cal.subtract(2, 2)).toBe(0);
    expect(cal.results).toBe(0);
})

test("Calculator subtract '2' - 2 = Error ", () => {
    const cal = new Calcultor();
    expect(() => {cal.subtract('2', 2)}).toThrowError("Inputs must be numbers");
})

test('Calculator multiply 2 + 2 = 4 ', () => {
    const cal = new Calcultor();
    expect(cal.multiply(2, 2)).toBe(4);
    expect(cal.results).toBe(4);
})

test("Calculator multiply '2' + 2 = 4 ", () => {
    const cal = new Calcultor();
    expect(() => {cal.multiply('2', 2)}).toThrowError("Inputs must be numbers");
})

test('Calculator divide 2 / 2 = 4 ', () => {
    const cal = new Calcultor();
    expect(cal.divide(2, 2)).toBe(1);
    expect(cal.results).toBe(1);
})

test("Calculator divide '2' / 2 = 4 ", () => {
    const cal = new Calcultor();
    expect(() => {cal.divide('2', 2)}).toThrowError("Inputs must be numbers");
})

test("Calculator divide 2 / 0 = 4 ", () => {
    const cal = new Calcultor();
    expect(() => {cal.divide(2, 0)}).toThrowError("Divide by Zero Error");
})

test('Calculator square 2 ^ 2 = 4 ', () => {
    const cal = new Calcultor();
    expect(cal.square(2)).toBe(4);
    expect(cal.results).toBe(4);
})

test("Calculator square '2'  = error ", () => {
    const cal = new Calcultor();
    expect(() => {cal.square('2')}).toThrowError("Inputs must be numbers");
})

test('Calculator squareRoot 4  = 2 ', () => {
    const cal = new Calcultor();
    expect(cal.squareRoot(4)).toBe(2);
    expect(cal.results).toBe(2);
})

test("Calculator squareRoot '4' = 2 ", () => {
    const cal = new Calcultor();
    expect(() => {cal.squareRoot('4')}).toThrowError("Inputs must be numbers");
})
