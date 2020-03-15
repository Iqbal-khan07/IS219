const StatisticsCalculator = require("../utils/StatisticsCalculator/StatisticsCalculator")

test('StatisticsCalculator mean [1, 2, 4, 4, 6] ', () => {
    const cal = new StatisticsCalculator();
    expect(cal.mean([1, 2, 4, 4, 6])).toBe(3.4);
    expect(cal.results).toBe(3.4);
})

test('StatisticsCalculator median [1, 2, 4, 4, 6] ', () => {
    const cal = new StatisticsCalculator();
    expect(cal.median([1, 2, 4, 4, 6])).toBe(4);
    expect(cal.results).toBe(4);
})

test('StatisticsCalculator mode [1, 2, 4, 4, 6] ', () => {
    const cal = new StatisticsCalculator();
    expect(cal.mode([1, 2, 4, 4, 6])).toBe(4);
    expect(cal.results).toBe(4);
})
test('StatisticsCalculator variance [1, 2, 4, 4, 6] ', () => {
    const cal = new StatisticsCalculator();
    expect(cal.variance([1, 2, 4, 4, 6])).toBe(3.04);
    expect(cal.results).toBe(3.04);
})
test('StatisticsCalculator standardDeviation [1, 2, 4, 4, 6] ', () => {
    const cal = new StatisticsCalculator();
    expect(cal.standardDeviation([1, 2, 4, 4, 6])).toBe(1.7435595774162693);
    expect(cal.results).toBe(1.7435595774162693);
})
test('StatisticsCalculator quartiles [3, -1, 5, 7], 0.5) ', () => {
    const cal = new StatisticsCalculator();
    expect(cal.standardDeviation([3, -1, 5, 7], 0.5)).toBe(4);
    expect(cal.results).toBe(4);
})