/**
 * Calculate Factorial
 * @function calculateFactorial
 * @param {number} n - The non-negative integer for which to calculate the factorial.
 * @returns {number} - The factorial of the input number 'n'.
 * @throws {Error} - Throws an error if 'n' is not a non-negative integer.
 */
/*
Question: Create a function called `calculateFactorial` that calculates the factorial of a non-negative integer 'n' and returns the result.

Procedure: if 5 then 5*4*3*2*1 = 120
Sample Input and Output:
- Input: 5
  Output: 120

Test Case:
calculateFactorial(10);

*/

// ANSWER:
function findFactorialNo(n) {
  var result = 1;
  for (let i = 2; i <= n; i++) {
      result = result * i;
  }
  return result;
}
var result = findFactorialNo(15)
console.log("findFactorialNo result", result)
