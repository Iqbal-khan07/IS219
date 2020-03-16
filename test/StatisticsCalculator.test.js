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

test('StatisticsCalculator sampleCorrealtion [1, 2, 3, 4, 5, 6, 7, 8], [4, 1, 5, 8, 4, 2, 6, 8] ', () => {
    const cal = new StatisticsCalculator();
    expect(cal.sampleCorrealtion([1, 2, 3, 4, 5, 6, 7, 8], [4, 1, 5, 8, 4, 2, 6, 8])).toBe(0.4575090108716775);
})

test('StatisticsCalculator sampleCorrealtion [1, 2, 3, 4, 5, 6, 7, 8], [4, 1, 5, 8, 4, 2, 6, 8] ', () => {
    const cal = new StatisticsCalculator();
    expect(() => {cal.sampleCorrealtion([1, "2", 3, 4, 5, 6, 7, 8], [4, "1", 5, 8, 4, 2, 6, 8])}).toThrowError("Input Must be a Integer array");
})

test("StatisticsCalculator sampleCorrealtion [] throws an error", () =>{
    const cal = new StatisticsCalculator();
    expect(() => {cal.sampleCorrealtion([])}).toThrowError("Empty Array");
})

/////////////// random sample tests ////////////////

// test('StatisticsCalculator randomSample [1,2,3,4,5,6,7,8,9],5 ', () => {
//     const cal = new StatisticsCalculator();
//     expect(cal.randomSample ([1,2,3,4,5,6,7,8,9],5)).toBe([ 7, 1, 3, 2, 2 ]);
// })

// test('StatisticsCalculator randomSample [1,"2",3,4,5,6,7,8,9],5 ', () => {
//     const cal = new StatisticsCalculator();
//     expect(() => {cal.randomSample ([1,"2",3,4,5,6,7,8,9],5)}).toThrowError("Input Must be a Integer array");
// })

// test("StatisticsCalculator randomSample [] throws an error", () =>{
//     const cal = new StatisticsCalculator();
//     expect(() => {cal.randomSample([])}).toThrowError("Empty Array");
// })

/////////////// Systematic sample tests ////////////////

test('StatisticsCalculator systematicSample [1,2,3,4,5,6,7,8,9],5 ', () => {
    const cal = new StatisticsCalculator();
    expect(cal.systematicSample ([1,2,3,4,5,6,7,8,9],5)).toStrictEqual([ 2, 3, 4, 5, 6 ]);
})

test('StatisticsCalculator systematicSample [1,"2",3,4,5,6,7,8,9],5 ', () => {
    const cal = new StatisticsCalculator();
    expect(() => {cal.systematicSample ([1,"2",3,4,5,6,7,8,9],5)}).toThrowError("Input Must be a Integer array");
})

test("StatisticsCalculator systematicSample [] throws an error", () =>{
    const cal = new StatisticsCalculator();
    expect(() => {cal.systematicSample([])}).toThrowError("Empty Array");
})

/////////////// Ztable tests ////////////////

test('StatisticsCalculator Ztable .90 ', () => {
    const cal = new StatisticsCalculator();
    expect(cal.Ztable (.90)).toStrictEqual(1.645);
})

test('StatisticsCalculator Ztable ".90" ', () => {
    const cal = new StatisticsCalculator();
    expect(() => {cal.Ztable ("0.90")}).toThrowError("Input Must be a Integer");
})

test("StatisticsCalculator Ztable [] throws an error", () =>{
    const cal = new StatisticsCalculator();
    expect(() => {cal.Ztable()}).toThrowError("Input Must be a Integer");
})

/////////////// Marginal Error tests ////////////////

test('StatisticsCalculator marginError [1, 2, 3, 5, 3, 4, 3, 4],0.90 ', () => {
    const cal = new StatisticsCalculator();
    expect(cal.marginError ([1, 2, 3, 5, 3, 4, 3, 4],0.90)).toBe(0.6780950094174673);
})

test('StatisticsCalculator marginError [1, "2", 3, 5, 3, 4, 3, 4],0.90 ', () => {
    const cal = new StatisticsCalculator();
    expect(() => {cal.marginError ([1, "2", 3, 5, 3, 4, 3, 4],0.90)}).toThrowError("Input Must be a Integer");
})

test("StatisticsCalculator marginError [] throws an error", () =>{
    const cal = new StatisticsCalculator();
    expect(() => {cal.marginError([])}).toThrowError("Empty Array");
})

/////////////// Confidenc Interval tests ////////////////

test('StatisticsCalculator confidencInterval [1, 2, 3, 5, 3, 4, 3, 4],0.90 ', () => {
    const cal = new StatisticsCalculator();
    expect(cal.confidencInterval ([1, 2, 3, 5, 3, 4, 3, 4],0.90)).toStrictEqual({"lower": 2.446904990582533, "upper": 3.803095009417467});
})

test('StatisticsCalculator confidencInterval [1, "2", 3, 5, 3, 4, 3, 4],0.90 ', () => {
    const cal = new StatisticsCalculator();
    expect(() => {cal.confidencInterval ([1, "2", 3, 5, 3, 4, 3, 4],0.90)}).toThrowError("Input Must be a Integer");
})

test("StatisticsCalculator confidencInterval [] throws an error", () =>{
    const cal = new StatisticsCalculator();
    expect(() => {cal.confidencInterval([])}).toThrowError("Empty Array");
})

///////////////  Cochran Sample Size tests ////////////////

test('StatisticsCalculator CochranSampleSize 0.5,0.05,0.95 ', () => {
    const cal = new StatisticsCalculator();
    expect(cal.CochranSampleSize(0.5,0.05,0.95)).toStrictEqual(384.1599999999999);
})

test('StatisticsCalculator CochranSampleSize 0.5,"0.05",0.95  ', () => {
    const cal = new StatisticsCalculator();
    expect(() => {cal.CochranSampleSize(0.5,"0.05",0.95)}).toThrowError("Inputs must be numbers");
})

test("StatisticsCalculator confidencInterval [] throws an error", () =>{
    const cal = new StatisticsCalculator();
    expect(() => {cal.confidencInterval([])}).toThrowError("Empty Array");
})