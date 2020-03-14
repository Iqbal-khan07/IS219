const Calculator = require("../Calculator/Calculator");

class StatisticsCalculator extends Calculator{
    constructor(){
        super();
    }
    mean(a){
        try {
            a.add()/a.length
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
     
        return median;
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
     
        return modes;
        }
}