const Calculator = require("./utils/Calculator")

const calc = new Calculator();
try {
    console.log(calc.add('2', 2))
} catch (error) {
    console.error(error)
}
