[![Build Status](https://travis-ci.com/Zoraiz-Naeem/IS219.svg?branch=master)](https://travis-ci.com/Zoraiz-Naeem/IS219) [![Coverage Status](https://coveralls.io/repos/github/Zoraiz-Naeem/IS219/badge.svg?branch=master)](https://coveralls.io/github/Zoraiz-Naeem/IS219?branch=master)

"# IS219" 
This project is  a statistical calculator. For a given data set, it will produce interactive graphics based on user standings.

PROJECT PLAN--

1. Calculator Object
  1. Properties
    1.Result 
  2. Calculator Methods
    1. Add -> Calls add static method from arithmeticOperators
    2. Subtract -> Call subtract static method from arithmeticOperators
    3. Multiply -> Calls multiply static method from arithmeticOperators
    4. Divide -> Calls divide static method from arithmeticOperators
    5. Square -> Calls square static method from arithmeticOperators
    6. SquareRoot -> Calls squareRoot static method from arithmeticOperators
    
  3. arithmeticOperators Static Class
    1. Methods
      1. Addition
        1. Check if array
        2. Call AddArray Method 
        3. Or Add individual numbers
        4. Or throw exception
      2. Subtraction-
        1. Check if numbers
        2. Subtract individual numbers
        3. Or throw exception
      3. Multiply 
        1. Check if numbers
        2. Multiply individual numbers
        3. Or throw exception
      4. Divide -> 
        1. Check if numbers
        2. Divide individual numbers
        3. Or throw exception
      5. Square -> 
        1. Check if numbers
        2. Use Math.pow to the second power
        3. Or throw exception
      6. SquareRoot -> 
        1. Check if numbers
        2. Use Math.pow to the half(0.5) power
        3. Or throw exception
      7. AddArray -> 
        1. Check if input is array
        2. Add all the elements in the array
        
  4. Statistic Calculator Static Class
    1. Mean- 
      1. Add all the elements from AddArray method from arithmeticOperators  
      2. Divide the sum by the number of elements
      3. Or throw exceptions
    2. Median-
      1. Check if the array is even
      2. If even return the mean of the middle two elements
      3. if odd, return the middle value
      4. Or throw exceptions
    3. Mode- 
      1. Find the most occurances of the value in an array element
      2. Return that specific element 
      3. Or throw exceptions
    4. Variance-
      1. Get the mean using the mean method
      2. Find the difference between the element and mean
      3. Square that value and create a new array
      4. Return the mean of the new array using the mean method
      5. Or throw exceptions
    5. Standard Deviation
      1. Find the variance of an array using variance method
      2. Use the squareRoot method from arithmeticOperators to get the Standard Deviation 
      3. Or throw exceptions
    6. Quartiles
    7. Skewness
      1. Find the mean using mean method
      2. Find the median using median method
      3. Find the standard deviation usign standardDeviation method
      4. Multiply the diffence between mean and median with 3 and divide that by standard deviation.
      5. Or throw exceptions
    8. Sample Correlation
    9. Population Correlation
    10. Z-Score
      1. Find the mean
      2. Find the Standard Deviation
      3. Subtract mean from input and divide that by Standard Deviation.
      4. Or throw exceptions
    11. Mean Deviation / Mean Absolute Deviation
      1. Find the mean
      2. Find the difference between all the elements and the mean and sum them up.
      3. Divide the sum by the length of the array
      4. Or throw exceptions
