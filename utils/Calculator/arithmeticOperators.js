const utils = require('../arithUtil')

const add = (augent, addent) => {

    if (utils.isNumber(augent) && utils.isNumber(addent)) {
        return augent + addent
    } else {
        throw new Error("Inputs must be numbers")
    }
     
}

const addArray = (arr) => {
    
    if(!utils.isArray(arr) || !utils.isNumArray(arr)) throw new Error("Input Must be a Integer array")
    let sum = 0;
    arr.forEach(num => {
        sum += num;
    });
    return sum;
    
}

const substract = (minuend, subtrahend) => {
    if (utils.isNumber(minuend) && utils.isNumber(subtrahend)) {
        return minuend - subtrahend
    } else {
         throw new Error("Inputs must be numbers")
    } 
}


const multiply = (multiplyer, multiplicant) => {
    if (utils.isNumber(multiplyer) && utils.isNumber(multiplicant)) {
        return multiplyer * multiplicant
    } else {
        throw new Error("Inputs must be numbers")
    }
}

const divide = (divide, divisor) => {
   
    if (utils.isNumber(divide) && utils.isNumber(divisor)) {
        if(divisor === 0) throw new Error("Divide by Zero Error")
        return divide / divisor
    } else {
        throw new Error("Inputs must be numbers")
    }
   
}

const square = (base) => {
    if (utils.isNumber(base)) {
       return Math.pow(base, 2)
    } else {
        throw new Error("Inputs must be numbers")
    }
}

const squareRoot = (base) => {
    if (utils.isNumber(base)) {
        return Math.pow(base, 0.5)
    } else {
        throw new Error("Inputs must be numbers")
    }
}


module.exports = {
    add,
    substract,
    multiply,
    divide,
    square,
    squareRoot,
    addArray
}