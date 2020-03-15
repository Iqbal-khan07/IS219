const Calculator = require("../Calculator/Calculator");
const utils = require("../arithUtil")

class StatisticsCalculator extends Calculator{
    constructor(){
        super();
    }

    mean(array){
        try {
            return this.results = this.add(array)/ array.length  
        }catch (error) {
            throw error
        }
    }
    
    median(numbers) {
        var median = 0, numsLen = numbers.length;

        if(numbers.length === 0) throw new Error("Empty Array")
        if(!utils.isNumArray(numbers)) throw new Error("Need a numeric array")

        numbers.sort();
     
        if (
            numsLen % 2 === 0 // is even
        ) {
            // average of two middle numbers
            median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
        } else { // is odd
            // middle number only
            median = numbers[(numsLen - 1) / 2];
        }
        this.results = median;
     
        return this.results;
    }
    mode(numbers) {

        if(numbers.length === 0) throw new Error("Empty Array")
        if(!utils.isNumArray(numbers)) throw new Error("Input Must be a Integer array")

        var modes = [], count = [], i, number, maxIndex = 0;
     
        for (i = 0; i < numbers.length; i += 1) {
            number = numbers[i];
            count[number] = (count[number] || 0) + 1;
            if (count[number] > maxIndex) {
                maxIndex = count[number];
            }
        }
     
        for (i in count){
            if (count.hasOwnProperty(i)) {
                if (count[i] === maxIndex) {
                    modes.push(Number(i));
                }
            }
        }
        
        this.results = parseInt(modes);
        return this.results;
    }

    variance(array){
        let m = this.mean(array)
        let v = 0
        var arrayV = []
        let i = 0
        for(i = 0; i < array.length; i++){
            v = array[i] - m
            v = v*v
            arrayV[i] = v
        }
        return this.results = this.mean(arrayV)
        
    }

    standardDeviation(array){
        let v = this.variance(array)
        return this.results = this.squareRoot(v)
    }

    quartiles(arr, q) {
        if(arr.length === 0) throw new Error("Empty Array")
        if(!utils.isNumArray(arr)) throw new Error("Input Must be a Integer array")

        const asc = arr => arr.sort((a, b) => a - b);
        const sorted = asc(arr);
        const pos = (sorted.length - 1) * q;
        const base = Math.floor(pos);
        const rest = pos - base;
        if (sorted[base + 1] !== undefined) {
              return this.results =  sorted[base] + rest * (sorted[base + 1] - sorted[base]);
        } else {
            return this.results = sorted[base];
        }
    }

    skewness(array){  
        return this.results = (3*(this.mean(array)-this.median(array))/(this.standardDeviation(array)))                 
    }

    meanDeviation(array){
        var i;
        let sum = 0
        let m = this.mean(array)
        for(i = 0;i<array.length;i++){
            sum += Math.abs(array[i]- m);     
        }   
        return this.results = (sum/array.length)
    } 

    zScore(array, x){
        let mean = this.mean(array)
        let sd = this.standardDeviation(array)                
        return this.results = (x - mean) / sd
    }

    sampleCorrealtion(arrayX, arrayY){
        if(arrayX.length !== arrayY.length) throw new Error("Both the arrays have to be of same size")
        const meanX = this.mean(arrayX)
        const meanY = this.mean(arrayY)
        const sdX = this.standardDeviation(arrayX)
        const sdY = this.standardDeviation(arrayY)
        const n = arrayX.length

        let r = 0
        for(let i=0; i < n; i++){
            let scoreX = (arrayX[i] - meanX) / sdX
            let scoreY = (arrayY[i] - meanY) / sdY

            r += (scoreX * scoreY)
        }
        return this.results = r / n
    }
}

module.exports = StatisticsCalculator