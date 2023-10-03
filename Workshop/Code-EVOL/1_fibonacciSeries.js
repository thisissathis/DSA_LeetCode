/**
 * Calculate Fibonacci Sequence
 * @function fibonacci
 * @param {number} n - The number of Fibonacci numbers to generate.
 * @returns {number[]} - An array containing the first 'n' Fibonacci numbers.
 * @throws {Error} - Throws an error if 'n' is not a positive integer.
 */

/**
Question: Create a function called `fibonacci` that calculates the Fibonacci sequence up 
to a specified positive integer 'n' and returns it as an array.

Sample Input and Output:
- Input: 7
- Output: [0, 1, 1, 2, 3, 5, 8]

Test Case:
fibonacci(5);
fibonacci(11);
fibonacci(15);
*/

// ANSWER:
function fibonacci(n) {
  if (n < 0) {
    throw new Error('n must be a positive integer');
  }

  let fibArray = [0, 1];
  for (let i = 2; i < n; i++) {
    fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
  }

  return fibArray;
}
var result = fibonacci(15)
console.log("fibonacci result", result)
