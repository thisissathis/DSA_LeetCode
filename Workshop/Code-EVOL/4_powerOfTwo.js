/**
 * Check Power of Two
 * @function isPowerOfTwo
 * @param {number} n - The positive integer to check for being a power of two.
 * @returns {boolean} - `true` if the input number 'n' is a power of two, `false` otherwise.
 * @throws {Error} - Throws an error if 'n' is not a positive integer.
 */
/*
Question: Create a function called `isPowerOfTwo` that checks whether a given positive integer 'n' is a power of two.

Procedure: A positive integer is considered a power of two if it can be expressed as 2 raised to some non-negative integer power. To check for this, repeatedly divide 'n' by 2 until it becomes 1 or an odd number. If it becomes 1, 'n' is a power of two; otherwise, it is not.

Sample Input and Output:
- Input: 16
  Output: true

Test Case:
isPowerOfTwo(10);
*/
// ANSWER:
function isPowerOfTwo(n) {
    if (n <= 0) {
        throw new Error('n must be a positive integer');
    }

    // Keep dividing 'n' by 2 until it becomes 1 or an odd number
    while (n > 1) {
        if (n % 2 !== 0) {
            return false; // 'n' is not a power of two
        }
        n /= 2;
    }

    return true; // 'n' is a power of two
}
var result = isPowerOfTwo(16);
console.log("isPowerOfTwo result:", result);

//BitWise Method: powerfull
function isPowerOfTwo(n) {
    if (n <= 0) {
        throw new Error('n must be a positive integer');
    }
    return (n & (n - 1)) === 0;
}