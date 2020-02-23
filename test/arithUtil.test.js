const util = require("../utils/arithUtil")

test("runing isNumber(1)", () => {
    expect(util.isNumber(1)).toBe(true)  
})

test("runing isNumber(1)", () => {
    expect(util.isNumber('1')).toBe(false)
})

test("runing isNumber(1)", () => {
    expect(util.isNumber('a')).toBe(false)
})

test('runing isNumArray([1, 2, 3, 4])', () => {
    expect(util.isNumArray([1, 2, 3, 4])).toBe(true)
})

test("runing isNumArray(['1', 2, 3, 4])", () => {
    expect(util.isNumArray(['1', 2, 3, 4])).toBe(false)
    util.isNumArray
})

test("runing isNumArray(['a', 2, 3, 4])", () => {
    expect(util.isNumArray(['a', 2, 3, 4])).toBe(false)
})

test("runing isArray([])", () => {
    expect(util.isNumArray([])).toBe(true)
})

test("runing isArray(1)", () => {
    expect(util.isNumArray(1)).toBe(false)
})
