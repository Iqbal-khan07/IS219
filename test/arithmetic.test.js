const arithmetic = require("../utils/arithmeticOperators")

test('add 2 + 2 to equal 4', () => {
    expect(arithmetic.add(2, 2)).toBe(4)    
})

test('subtract 2 - 2 to equal 0', () => {
    expect(arithmetic.substract(2, 2)).toBe(0)
   
})

test('Checking if the function throws an error', () => {
    expect(arithmetic.substract).toThrowError("Inputs must be numbers")
})

test('subtract 2 - 4 to equal -2', () => {
    expect(arithmetic.substract(2, 4)).toBe(-2)
})


test('subtract 2 * 4 to equal 8', () => {
    expect(arithmetic.multiply(2, 4)).toBe(8)
})


test('subtract -2 * 4 to equal -8', () => {
    expect(arithmetic.multiply(-2, 4)).toBe(-8)
})


test('subtract 4 * 5 to equal 0.8', () => {
    expect(arithmetic.divide(4, 5)).toBe(0.8)
})


test('2 square  2  equal 4', () => {
    expect(arithmetic.square(2, 2)).toBe(4)
})

test('16 squareroot equal 4', () => {
    expect(arithmetic.squareRoot(16)).toBe(4)
})

