// You are tasked with writing a function that takes an array of numbers as input and returns a new array containing only the prime numbers from the original array. 
//How would you implement this function efficiently, ensuring that it accurately identifies prime numbers and returns them in the same order they appear in the input array?
// For example if you provide an array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] it should return an array [2, 3, 5, 7].

function findPrimes(nums) {
    /**
     * Finds prime numbers in an array of numbers.
     *
     * @param {number[]} nums - The input array of numbers.
     * @returns {number[]} An array containing only the prime numbers from the input array.
     */
   
    const primes = [];
   
    for (const num of nums) {
      // Handle numbers less than or equal to 1 (not prime)
      if (num <= 1) {
        continue;
      }
   
      // Check for divisibility by 2 first (most common case)
      if (num % 2 === 0) {
        // Even numbers are not prime except 2
        if (num === 2) {
          primes.push(num);
        }
        continue;
      }
   
      // Check for divisibility by odd numbers from 3 to the square root of num
      let isPrime = true;
      for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
   
      if (isPrime) {
        primes.push(num);
      }
    }
   
    return primes;
   }
   
   // Example usage:
   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   const primeNumbers = findPrimes(numbers);
   console.log(primeNumbers);  // Output: [2, 3, 5, 7]