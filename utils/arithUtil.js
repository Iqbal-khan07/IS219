
const isNumber = (num) => {
    return parseFloat(num) === num
}

const isArray = (arr) => {
    return Array.isArray(arr);
}

const isEmpty = (arr) => {
    return arr.length === 0
}

const isNumArray = (arr) => {
    if(!Array.isArray(arr)) return false
    let isArray = true
    arr.forEach(num => {
        if(!isNumber(num)){
            isArray = false;   
            return
        }
    });
    return isArray
}

const NumericArrayTests = (array) => {
    if(isEmpty(array)) throw new Error("Empty Array") 
    if(!isNumArray(array)) throw new Error("Input Must be a Integer array")
}
const NumericTests = (num) => {
    if(!isNumber(num)) throw new Error("Input Must be a Integer")
}


module.exports = {
    isNumArray,
    isNumber,
    isArray,
    NumericArrayTests,
    NumericTests,
    isEmpty
}