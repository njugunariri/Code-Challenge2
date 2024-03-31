// Write a function that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox'
// the output should be 'tHE qUICK bROWN fOX'

function swapCase(str) {
    // Loop through each character in the string
    let swappedString = "";
    for (let char of str) {
      // Check if the character is in uppercase
      if (char === char.toUpperCase()) {
        // convert to lowercase
        swappedString += char.toLowerCase();
      } else if (char === char.toLowerCase()) {
        swappedString += char.toUpperCase();
      } else {
        // If lowercase, convert to uppercase and add the result
        swappedString += char;
      }
    }
    return swappedString;
  }
  
  // Example 
  const inputString = "The Quick Brown Fox";
  const swappedString = swapCase(inputString);
  console.log(swappedString);