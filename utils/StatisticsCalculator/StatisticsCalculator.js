const Calculator = require("../Calculator/Calculator");

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
        var modes = [], count = [], i, number, maxIndex = 0;
     
        for (i = 0; i < numbers.length; i += 1) {
            number = numbers[i];
            count[number] = (count[number] || 0) + 1;
            if (count[number] > maxIndex) {
                maxIndex = count[number];
            }
        }
     
        for (i in count)
            if (count.hasOwnProperty(i)) {
                if (count[i] === maxIndex) {
                    modes.push(Number(i));
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
        for(i = 0;i<array.length;i++){
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
      
}

module.exports = StatisticsCalculator