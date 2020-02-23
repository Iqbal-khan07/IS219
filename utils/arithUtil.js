
const isNumber = (num) => {
    return parseFloat(num) === num
}

const isArray = (arr) => {
    return Array.isArray(arr);
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


module.exports = {
    isNumArray,
    isNumber,
    isArray
}