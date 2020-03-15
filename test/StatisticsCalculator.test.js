const StatisticsCalculator = require("../utils/StatisticsCalculator/StatisticsCalculator")

test('StatisticsCalculator mean [1, 2, 4, 4, 6] ', () => {
    const cal = new StatisticsCalculator();
    expect(cal.mean([1, 2, 4, 4, 6])).toBe(3.4);
    expect(cal.results).toBe(3.4);
})
test('StatisticsCalculator mean [1, "2", 4, 4, 6] ', () => {
    const cal = new StatisticsCalculator();
    expect(() => {cal.mean(1, "2")}).toThrowError("Inputs must be numbers");
})
test("StatisticsCalculator mean [] throws an error", () =>{
    const cal = new StatisticsCalculator();
    expect(() => {cal.mean([])}).toThrowError("Empty Array");
})

test('StatisticsCalculator median [1, 2, 4, 4, 6] ', () => {
    const cal = new StatisticsCalculator();
    expect(cal.median([1, 2, 4, 4, 6])).toBe(4);
    expect(cal.results).toBe(4);
})
// test('StatisticsCalculator median [1, "2", 4, 4, 6] ', () => {
//     const cal = new StatisticsCalculator();
//     expect(() => {cal.median(1, "2")}).toThrowError("Inputs must be numbers");
// })
// test("StatisticsCalculator median [] throws an error", () =>{
//     const cal = new StatisticsCalculator();
//     expect(() => {cal.median([])}).toThrowError("Empty Array");
// })

test('StatisticsCalculator mode [1, 2, 4, 4, 6] ', () => {
    const cal = new StatisticsCalculator();
    expect(cal.mode([1, 2, 4, 4, 6])).toBe(4);
    expect(cal.results).toBe(4);
})
// test('StatisticsCalculator mode [1, "2", 4, 4, 6] ', () => {
//     const cal = new StatisticsCalculator();
//     expect(() => {cal.mode(1, "2")}).toThrowError("Inputs must be numbers");
// })
// test("StatisticsCalculator mode [] throws an error", () =>{
//     const cal = new StatisticsCalculator();
//     expect(() => {cal.mode([])}).toThrowError("Empty Array");
// })
test('StatisticsCalculator variance [1, 2, 4, 4, 6] ', () => {
    const cal = new StatisticsCalculator();
    expect(cal.variance([1, 2, 4, 4, 6])).toBe(3.04);
    expect(cal.results).toBe(3.04);
})
test('StatisticsCalculator variance [1, "2", 4, 4, 6] ', () => {
    const cal = new StatisticsCalculator();
    expect(() => {cal.variance(1, "2")}).toThrowError("Inputs must be numbers");
})
test("StatisticsCalculator variance [] throws an error", () =>{
    const cal = new StatisticsCalculator();
    expect(() => {cal.variance([])}).toThrowError("Empty Array");
})
test('StatisticsCalculator standardDeviation [1, 2, 4, 4, 6] ', () => {
    const cal = new StatisticsCalculator();
    expect(cal.standardDeviation([1, 2, 4, 4, 6])).toBe(1.7435595774162693);
    expect(cal.results).toBe(1.7435595774162693);
})
test('StatisticsCalculator standardDeviation [1, "2", 4, 4, 6] ', () => {
    const cal = new StatisticsCalculator();
    expect(() => {cal.standardDeviation(1, "2")}).toThrowError("Inputs must be numbers");
})
test("StatisticsCalculator standardDeviation [] throws an error", () =>{
    const cal = new StatisticsCalculator();
    expect(() => {cal.standardDeviation([])}).toThrowError("Empty Array");
})
test('StatisticsCalculator quartiles [3, -1, 5, 7], 0.5) ', () => {
    const cal = new StatisticsCalculator();
    expect(cal.quartiles([3, -1, 5, 7], 0.5)).toBe(4);
    expect(cal.results).toBe(4);
})
// test('StatisticsCalculator quartiles [3, -1, 5, 7], 0.5) ', () => {
//     const cal = new StatisticsCalculator();
//     expect(() => {cal.quartiles(3, "-1"),0.5}).toThrowError("Inputs must be numbers");
// })
// test("StatisticsCalculator quartiles [] throws an error", () =>{
//     const cal = new StatisticsCalculator();
//     expect(() => {cal.quartiles([],0.5)}).toThrowError("Empty Array");
// })

test('StatisticsCalculator skewness [2.5, 3.7, 6.6, 9.1, 9.5, 10.7, 11.9, 21.5, 22.6, 25.2] ', () => {
    const cal = new StatisticsCalculator();
    expect(cal.skewness([2.5, 3.7, 6.6, 9.1, 9.5, 10.7, 11.9, 21.5, 22.6, 25.2])).toBe(-4.555993073228235);
    expect(cal.results).toBe(-4.555993073228235);
})
test('StatisticsCalculator skewness [1, "2", 4, 4, 6] ', () => {
    const cal = new StatisticsCalculator();
    expect(() => {cal.skewness(1, "2")}).toThrowError("Inputs must be numbers");
})
test("StatisticsCalculator skewness [] throws an error", () =>{
    const cal = new StatisticsCalculator();
    expect(() => {cal.skewness([])}).toThrowError("Empty Array");
})
test('StatisticsCalculator meanDeviation [10, 20, 30] ', () => {
    const cal = new StatisticsCalculator();
    expect(cal.meanDeviation([10, 20, 30])).toBe(6.666666666666667);
    expect(cal.results).toBe(6.666666666666667);
})
test('StatisticsCalculator meanDeviation [1, "2", 4, 4, 6] ', () => {
    const cal = new StatisticsCalculator();
    expect(() => {cal.meanDeviation(1, "2")}).toThrowError("Inputs must be numbers");
})
test("StatisticsCalculator meanDeviation [] throws an error", () =>{
    const cal = new StatisticsCalculator();
    expect(() => {cal.meanDeviation([])}).toThrowError("Empty Array");
})
test('StatisticsCalculator zScore [12, 440, 7900] ', () => {
    const cal = new StatisticsCalculator();
    expect(cal.zScore([12, 440, 7900])).toStrictEqual([-0.7653704393079397, -0.6471963599342752, 1.4125667992422148]);
    expect(cal.results).toStrictEqual([-0.7653704393079397, -0.6471963599342752, 1.4125667992422148]);
})
test('StatisticsCalculator zScore [1, "2", 4, 4, 6] ', () => {
    const cal = new StatisticsCalculator();
    expect(() => {cal.zScore(1, "2")}).toThrowError("Inputs must be numbers");
})
test("StatisticsCalculator zScore [] throws an error", () =>{
    const cal = new StatisticsCalculator();
    expect(() => {cal.zScore([])}).toThrowError("Empty Array");
})