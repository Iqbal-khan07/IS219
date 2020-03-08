const operations = require("./arithmeticOperators")

class Calculator{
    add(a=null, b=null){
        try {
            if(Array.isArray(a)){
                return this.results = operations.addArray(a)
            }else{
                return this.results = operations.add(a, b)
            }    
        } catch (error) {
            throw error
        }  
    }

    subtract(a, b){
        try {
            return this.results = operations.substract(a, b);
        } catch (error) {
            throw error
        }
    }

    multiply(a, b){
        try {
            return this.results = operations.multiply(a, b);
        } catch (error) {
            throw error
        }
    }

    divide(a, b){
        try {
            return this.results = operations.divide(a, b);
        } catch (error) {
            throw error
        }
    }

    square(a){
        try {
            return this.results = operations.square(a);
        } catch (error) {
            throw error
        }
    }
    
    squareRoot(a){
        try {
            return this.results = operations.squareRoot(a);
        } catch (error) {
            throw error
        }
    }

}

module.exports = Calculator