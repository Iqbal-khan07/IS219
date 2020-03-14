// const CSVReader = require("./utils/CSVReader")
// const City = require("./models/City")


// let reader = new CSVReader("./test/testData/testCitiesData.csv", City);

// const test = async () => {
//     try {
//         let {output, size} = await reader.parse();
//         let record = output[0]  
//         console.log(record)  
//     } catch (error) {
//         console.log(error)
//     }
// }

// test();
// const Random = require("./utils/Random/Random")

// let output = Random.nRandomElementsFromArray([1, 2, 3, 4, 5], 10, 'apple')
// console.log(output)

// Random.randomElementFromArray([], 1)

const StatisticsCalculator = require("./utils/StatisticsCalculator/StatisticsCalculator")

const calculator = new StatisticsCalculator()
console.log(calculator.mean([1, 2, 3, 4]))

