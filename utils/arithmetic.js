const add = (augent, addent) => {
    try {
        if (parseFloat(augent) === augent && parseFloat(addent) === addent) {
            return augent + addent
        } else {
            throw "Inputs must be numbers"
        }
    } catch (error) {
        throw error    
    }
}

const substract = (minuend, subtrahend) => {
    try {
        if (parseFloat(minuend) === minuend && parseFloat(subtrahend) === subtrahend) {
            return minuend - subtrahend
        } else {
            throw "Inputs must be numbers"
        }
    } catch (error) {
        throw error    
    }
}


const multiply = (multiplyer, multiplicant) => {
    try {
        if (parseFloat(multiplyer) === multiplyer && parseFloat(multiplicant) === multiplicant) {
            return multiplyer * multiplicant
        } else {
            throw "Inputs must be numbers"
        }
    } catch (error) {
        throw error    
    }
}

const divide = (divide, divisor) => {
    try {
        if (parseFloat(divide) === divide && parseFloat(divisor) === divisor) {
            if(divisor === 0) throw "Cannot divide by zero"
            return divide / divisor
        } else {
            throw "Inputs must be numbers"
        }
    } catch (error) {
        throw error    
    }
}

const square = (base) => {
    try {
        if (parseFloat(base) === base) {
            return Math.pow(base, 2)
        } else {
            throw "Inputs must be numbers"
        }
    } catch (error) {
        throw error    
    }
}

const squareRoot = (base) => {
    try {
        if (parseFloat(base) === base) {
            return Math.pow(base, 0.5)
        } else {
            throw "Inputs must be numbers"
        }
    } catch (error) {
        throw error    
    }
}


module.exports = {
    add,
    substract,
    multiply,
    divide,
    square,
    squareRoot
}