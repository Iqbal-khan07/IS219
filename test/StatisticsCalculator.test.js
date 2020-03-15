const StatisticsCalculator = require("../utils/StatisticsCalculator/StatisticsCalculator")

/////////////// mean tests ////////////////

test('StatisticsCalculator mean [1, 2, 4, 4, 6] ', () => {
    const cal = new StatisticsCalculator();
    expect(cal.mean([1, 2, 4, 4, 6])).toBe(3.4);
    expect(cal.results).toBe(3.4);
})
test('StatisticsCalculator mean [1, "2", 4, 4, 6] ', () => {
    const cal = new StatisticsCalculator();
    expect(() => {cal.mean([1, "2", 4, 4, 6])}).toThrowError("Input Must be a Integer array");
})
test("StatisticsCalculator mean [] throws an error", () =>{
    const cal = new StatisticsCalculator();
    expect(() => {cal.mean([])}).toThrowError("Empty Array");
})

/////////////// median tests ////////////////

test('StatisticsCalculator median [1, 2, 4, 4, 6] ', () => {
    const cal = new StatisticsCalculator();
    expect(cal.median([1, 2, 4, 4, 6])).toBe(4);
    expect(cal.results).toBe(4);
})


test('StatisticsCalculator median [1, "2", 4, 4, 6] ', () => {
    const cal = new StatisticsCalculator();
    expect(() => {cal.median([1, "2", 4, 4, 6])}).toThrowError("Input Must be a Integer array");
})
test("StatisticsCalculator median [] throws an error", () =>{
    const cal = new StatisticsCalculator();
    expect(() => {cal.median([])}).toThrowError("Empty Array");
})


/////////////// Mode tests ////////////////

test('StatisticsCalculator mode [1, 2, 4, 4, 6] ', () => {
    const cal = new StatisticsCalculator();
    expect(cal.mode([1, 2, 4, 4, 6])).toBe(4);
    expect(cal.results).toBe(4);
})
test('StatisticsCalculator mode [1, "2", 4, 4, 6] ', () => {
    const cal = new StatisticsCalculator();
    expect(() => {cal.mode([1, "2", 4, 4, 6])}).toThrowError("Input Must be a Integer array");
})
test("StatisticsCalculator mode [] throws an error", () =>{
    const cal = new StatisticsCalculator();
    expect(() => {cal.mode([])}).toThrowError("Empty Array");
})

/////////////// variance tests ////////////////

test('StatisticsCalculator variance [1, 2, 4, 4, 6] ', () => {
    const cal = new StatisticsCalculator();
    expect(cal.variance([1, 2, 4, 4, 6])).toBe(3.04);
    expect(cal.results).toBe(3.04);
})
test('StatisticsCalculator variance [1, "2", 4, 4, 6] ', () => {
    const cal = new StatisticsCalculator();
    expect(() => {cal.variance([1, "2", 4, 4, 6])}).toThrowError("Input Must be a Integer array");
})
test("StatisticsCalculator variance [] throws an error", () =>{
    const cal = new StatisticsCalculator();
    expect(() => {cal.variance([])}).toThrowError("Empty Array");
})

/////////////// standard deviation tests ////////////////

test('StatisticsCalculator standardDeviation [1, 2, 4, 4, 6] ', () => {
    const cal = new StatisticsCalculator();
    expect(cal.standardDeviation([1, 2, 4, 4, 6])).toBe(1.7435595774162693);
    expect(cal.results).toBe(1.7435595774162693);
})
test('StatisticsCalculator standardDeviation [1, "2", 4, 4, 6] ', () => {
    const cal = new StatisticsCalculator();
    expect(() => {cal.standardDeviation([1, "2", 4, 4, 6])}).toThrowError("Input Must be a Integer array");
})
test("StatisticsCalculator standardDeviation [] throws an error", () =>{
    const cal = new StatisticsCalculator();
    expect(() => {cal.standardDeviation([])}).toThrowError("Empty Array");
})


/////////////// quartiles tests ////////////////

test('StatisticsCalculator quartiles [3, -1, 5, 7], 0.5) ', () => {
    const cal = new StatisticsCalculator();
    expect(cal.quartiles([3, -1, 5, 7], 0.5)).toBe(4);
    expect(cal.results).toBe(4);
})
test('StatisticsCalculator quartiles [3, "-1", 5, 7], 0.5) ', () => {
    const cal = new StatisticsCalculator();
    expect(() => {cal.quartiles([3, "-1", 5, 7], 0.5)}).toThrowError("Input Must be a Integer array");
})
test("StatisticsCalculator quartiles [] throws an error", () =>{
    const cal = new StatisticsCalculator();
    expect(() => {cal.quartiles([],0.5)}).toThrowError("Empty Array");
})

/////////////// skweness tests ////////////////

test('StatisticsCalculator skewness [2.5, 3.7, 6.6, 9.1, 9.5, 10.7, 11.9, 21.5, 22.6, 25.2] ', () => {
    const cal = new StatisticsCalculator();
    expect(cal.skewness([2.5, 3.7, 6.6, 9.1, 9.5, 10.7, 11.9, 21.5, 22.6, 25.2])).toBe(-4.555993073228235);
    expect(cal.results).toBe(-4.555993073228235);
})
test('StatisticsCalculator skewness [2.5, "3.7", 6.6, 9.1, 9.5, 10.7, 11.9, 21.5, 22.6, 25.2] ', () => {
    const cal = new StatisticsCalculator();
    expect(() => {cal.skewness([2.5, "3.7", 6.6, 9.1, 9.5, 10.7, 11.9, 21.5, 22.6, 25.2])}).toThrowError("Input Must be a Integer array");
})
test("StatisticsCalculator skewness [] throws an error", () =>{
    const cal = new StatisticsCalculator();
    expect(() => {cal.skewness([])}).toThrowError("Empty Array");
})

/////////////// mean-deviation tests ////////////////
test('StatisticsCalculator meanDeviation [10, 20, 30] ', () => {
    const cal = new StatisticsCalculator();
    expect(cal.meanDeviation([10, 20, 30])).toBe(6.666666666666667);
    expect(cal.results).toBe(6.666666666666667);
})
test('StatisticsCalculator meanDeviation [10, "20", 30] ', () => {
    const cal = new StatisticsCalculator();
    expect(() => {cal.meanDeviation([10, "20", 30])}).toThrowError("Input Must be a Integer array");
})
test("StatisticsCalculator meanDeviation [] throws an error", () =>{
    const cal = new StatisticsCalculator();
    expect(() => {cal.meanDeviation([])}).toThrowError("Empty Array");
})


/////////////// z-score tests ////////////////
test('StatisticsCalculator zScore [1,2,3,4], 2) ', () => {
    const cal = new StatisticsCalculator();
    expect(cal.zScore([1,2,3,4], 2)).toBe(-0.4472135954999579);
})

test('StatisticsCalculator zScore [1,2,3,4], 2) ', () => {
    const cal = new StatisticsCalculator();
    expect(() => {cal.zScore([1,"2",3,4], 2)}).toThrowError("Input Must be a Integer array");
})

test("StatisticsCalculator zScore [] throws an error", () =>{
    const cal = new StatisticsCalculator();
    expect(() => {cal.zScore([])}).toThrowError("Empty Array");
})

/////////////// sample correlation tests ////////////////

// test('StatisticsCalculator zScore [12, 440, 7900] ', () => {
//     const cal = new StatisticsCalculator();
//     expect(cal.sampleCorrealtion([1, 2, 3, 4, 5, 6, 7, 8], [4, 1, 5, 8, 4, 2, 6, 8])).toBe(0.4575090108716775);
// })

// test('StatisticsCalculator zScore [1, "2", 4, 4, 6] ', () => {
//     const cal = new StatisticsCalculator();
//     expect(() => {cal.sampleCorrealtion([1, "2", 4, 4, 6], [1, "2", 4, 4, 6])}).toThrowError("Input Must be a Integer array");
// })

// test("StatisticsCalculator zScore [] throws an error", () =>{
//     const cal = new StatisticsCalculator();
//     expect(() => {cal.zScore([])}).toThrowError("Empty Array");
// })