//Write a JavaScript function that accepts two numbers to generate an array between them.
// For example, if the two numbers are 4 and 7, 
//the output should be [4, 5, 6, 7] and -4 and 7 should return [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7].

function generateArray(start, end) {
    /**
     * Generates an array of numbers between start (inclusive) and end (inclusive).
     *
     * @param {number} start - The starting number (inclusive).
     * @param {number} end - The ending number (inclusive).
     * @returns {number[]} An array containing the numbers between start and end.
     */
   
    // Handle the case where start is greater than end
    if (start > end) {
      return Array.from({ length: start - end + 1 }, (_, i) => start - i);
    } else {
      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    }
   }
   
   // Example usage:
   const startNum = 4;
   const endNum = 7;
   const numberArray = generateArray(startNum, endNum);
   console.log(numberArray);  // Output: [4, 5, 6, 7]
   
   // Another example with negative numbers
   const startNum2 = -4;
   const endNum2 = 7;
   const numberArray2 = generateArray(startNum2, endNum2);
   console.log(numberArray2);  // Output: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]