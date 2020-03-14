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
}