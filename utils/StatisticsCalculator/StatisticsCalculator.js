const Calculator = require("../Calculator/Calculator");
const utils = require("../arithUtil")
const Random = require("../Random/Random")

class StatisticsCalculator extends Calculator{
    constructor(){
        super();
    }

    mean(array){
        utils.NumericArrayTests(array)
        return this.results = this.add(array)/ array.length  
    }
    
    median(numbers) {
        utils.NumericArrayTests(numbers)
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
        utils.NumericArrayTests(numbers)
    
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
        utils.NumericArrayTests(array)
        
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
        utils.NumericArrayTests(array)
        let v = this.variance(array)
        return this.results = this.squareRoot(v)
    }

    quartiles(arr, q) {
        utils.NumericArrayTests(arr)

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
        utils.NumericArrayTests(array)
        return this.results = (3*(this.mean(array)-this.median(array))/(this.standardDeviation(array)))                 
    }

    meanDeviation(array){
        utils.NumericArrayTests(array)
        var i;
        let sum = 0
        let m = this.mean(array)
        for(i = 0;i<array.length;i++){
            sum += Math.abs(array[i]- m);     
        }   
        return this.results = (sum/array.length)
    } 

    zScore(array, x){
        utils.NumericArrayTests(array)
        let mean = this.mean(array)
        let sd = this.standardDeviation(array)                
        return this.results = (x - mean) / sd
    }

    sampleCorrealtion(arrayX, arrayY){
        utils.NumericArrayTests(arrayX)
        utils.NumericArrayTests(arrayY)
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

    randomSample(data, size){
        utils.NumericArrayTests(data)
        return this.results = Random.nRandomElementsFromArray(data, size)
    }

    systematicSample(data, size){
        utils.NumericArrayTests(data)
        const rand = new Random(1)
        const sample = []

        const samplingInterval = Math.floor(data.length / size)
        console.log('interval', samplingInterval) 
        let start = rand.randomInt(0, data.length)
        while(true){
            console.log(start)
            if((data.length - 1 - start)/(data.length - size - 1) >= 0){
                break
            }
            start = rand.randomInt(0, data.length)
        }
        for(let i = start, j=0; j<size; ++j,i+=samplingInterval){
            sample.push(data[i])
        }
        return this.results = sample
    }

    Ztable(x){
        utils.NumericTests(x)
        const Ztable = {
            0.8: 1.282,
            0.85: 1.440,
            0.90: 1.645,
            0.95: 1.960,
            0.99: 2.576,
            0.995: 2.807,
            0.999: 3.291
        }
        return Ztable[x]
    }

    marginError(sample, confidenceLevel=0.95){
    
        const sampleStd = this.standardDeviation(sample)
        const n = sample.length
        let z = this.Ztable(confidenceLevel)
        
    
        if(z>3.291||z<1.282 ){
            throw new Error("Choose between confidence level of 0.8, 0.85, 0.90, 0.99, 0.995, 0.999")
        }

        const margin = z * (sampleStd/this.squareRoot(n))
        return this.results = margin
    }

    confidencInterval(sample, confidenceLevel=0.95){
        const marginOfError = this.marginError(sample, confidenceLevel)
        const sampleMean = this.mean(sample)
        return {
            upper: sampleMean + marginOfError,
            lower: sampleMean - marginOfError 
        }
    }

    CochranSampleSize(proportion, marginOfError, confidenceLevel){
        const Z = this.Ztable(confidenceLevel)
        return (this.square(Z) * proportion * (1 -proportion))/this.square(marginOfError)
    } 

}


module.exports = StatisticsCalculator