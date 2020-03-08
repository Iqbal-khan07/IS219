const CSVReader = require("./utils/CSVReader")
const City = require("./models/City")


let reader = new CSVReader("./test/testData/testCitiesData.csv", City);

const test = async () => {
    try {
        let {output, size} = await reader.parse();
        let record = output[0]  
        console.log(record)  
    } catch (error) {
        console.log(error)
    }
}

test();
