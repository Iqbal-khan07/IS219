const CSVReader = require("../utils/CSVReader")
const City = require("../models/City")
const path = require("path")

var appdir = path.dirname("index.js")
const dataFilePath = `${appdir}/test/testData/testCitiesData.csv`


test("Create a CSVReader Object", () => {
    let csv = new CSVReader("./testData/testCitiesData.csv", City)
    expect(csv).toBeInstanceOf(CSVReader)
})

test("Cheaking if correct instance of records", async () => {
    let reader = new CSVReader(dataFilePath, City);
    const {output} = await reader.parse()
    expect(output[0]).toBeInstanceOf(City)
})

test("Checking Number of Records of CSVReader", () => {
    let csv = new CSVReader(dataFilePath, City)
    csv.parse().then(({size}) => {
        expect(size).toBe(2)
    }).catch(error => {
        console.error(error)
    })
})

