const Random = require("../utils/Random/Random")

test("Create a Random Object", () => {
    let rand = new Random()
    expect(rand).toBeInstanceOf(Random)
})


test("rand.random() without seed", () => {
    let rand = new Random()
    expect(rand.random()).toBe(0.38668969413265586)
})

test("rand.random() with seed 1", () => {
    let rand = new Random(1)
    expect(rand.random()).toBe(0.11042225826531649)
})

test("rand.random() with seed 2", () => {
    let rand = new Random(2)
    expect(rand.random()).toBe(0.3433847529813647)
})

test("rand.randomInt(1, 10) with seed 2", () => {
    let bool = true;

    let rand = new Random(2)
    for(let i=0; i<100; i++){
        x = rand.randomInt(1, 10)
        if(x < 1 || x > 10){
            bool = false
            break
        }
    }
    expect(bool).toBe(true)
})

test("rand.randomDecimal(1, 10) with seed 2", () => {
    let bool = true;

    let rand = new Random(2)
    for(let i=0; i<100; i++){
        x = rand.randomDecimal(1, 10)
        if(x < 1.0 && x > 9.0){
            bool = false
            break
        }
    }
    expect(bool).toBe(true)
})

test("rand.randomInt(1, 10) with seed 2", () => {
    let bool = true;

    let rand = new Random(2)
    for(let i=0; i<100; i++){
        x = rand.randomInt(1, 10)
        if(x < 1 && x > 9){
            bool = false
            break
        }
    }
    expect(bool).toBe(true)
})

test("checking size of Random.randomArrayOfInteger(1, 10, 5, 10) with seed 2", () => {
    let arr = Random.randomArrayOfIntegers(1, 10, 5, 10)
    expect(arr.length).toBe(10)
})

test("checking size of Random.randomArrayOfDecimal(1, 10, 5, 10) with seed 2", () => {
    let arr = Random.randomArrayOfDecimals(1, 10, 5, 10)
    expect(arr.length).toBe(10)
})

test("Random.randomElementFromArray([4, 1, 5, 3, 0.1, 0.3], 2)", () => {
    let arr = [4, 1, 5, 3, 0.1, 0.3];
    let element = Random.randomElementFromArray(arr)
    let bool = false
    arr.forEach((ele) => {
        if(ele === element){
            bool = true
        } 
    })
    expect(bool).toBe(true)
})

test("Random.randomElementFromArray([], 2) with seed 2", () => {
    expect(() => {Random.randomElementFromArray([], 1)}).toThrowError("Empty Array");
})

test("Random.randomElementFromArray([1, 2, 3, 4, 5], 2) with seed 2", () => {
    let output = Random.nRandomElementsFromArray([1, 2, 3, 4, 5], 3)
    expect(output.length).toBe(3);
})
