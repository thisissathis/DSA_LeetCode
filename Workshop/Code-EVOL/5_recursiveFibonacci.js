/**
 * Find the Nth Fibonacci Number
 * @function recursiveFibonacci
 * @param {number} n - The non-negative integer representing the position in the Fibonacci sequence.
 * @returns {number} - The Nth Fibonacci number.
 * @throws {Error} - Throws an error if 'n' is not a non-negative integer.
 */
/*
Question: Create a function called `recursiveFibonacci` that finds the Nth Fibonacci number.

Procedure: The Fibonacci sequence is a sequence of numbers where each number is the sum of the two preceding ones (e.g., 0, 1, 1, 2, 3, 5, 8, ...). To find the Nth Fibonacci number, you can use a recursive approach, where `recursiveFibonacci(0)` returns 0, `recursiveFibonacci(1)` returns 1, and for any other value of 'n', `recursiveFibonacci(n)` returns `recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)`.

Sample Input and Output:
- Input: 6
  Output: 8

Test Case:
recursiveFibonacci(10);
*/
// ANSWER:
function recursiveFibonacci(n) {
    if (n < 0) {
        throw new Error('n must be a non-negative integer');
    }

    // Base cases: 0th Fibonacci number is 0, and 1st Fibonacci number is 1
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }

    // Recursive case: Calculate Fibonacci number by summing the previous two Fibonacci numbers
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}
var result = recursiveFibonacci(6);
console.log("Nth Fibonacci Number:", result);
