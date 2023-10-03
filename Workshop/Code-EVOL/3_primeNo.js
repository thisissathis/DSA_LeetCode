/**
 * Check Prime Number
 * @function isPrime
 * @param {number} n - The positive integer to check for primality.
 * @returns {boolean} - `true` if the input number 'n' is prime, `false` otherwise.
 * @throws {Error} - Throws an error if 'n' is not a positive integer.
 */
/*
Question: Create a function called `isPrime` that checks whether a given positive integer 'n' is a prime number.

Procedure: A prime number is a positive integer greater than 1 that is divisible by only 1 and itself. To check for primality, iterate from 2 to the square root of 'n' and see if 'n' is divisible by any number in that range.

Sample Input and Output:
- Input: 7
  Output: true

Test Case:
isPrime(10);
*/
// ANSWER:
function isPrime(n) {
    if (n <= 1) {
        throw new Error('n must be a positive integer greater than 1');
    }

    // Special case for 2, the only even prime number
    if (n === 2) {
        return true;
    }

    // Check for divisibility from 2 to the square root of 'n'
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; // 'n' is divisible by a number other than 1 and itself
        }
    }

    return true; 
}
var result = isPrime(7);
console.log("isPrime result:", result);
