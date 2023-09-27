// product: calculate the product of an array of numbers.
function product(nums) {
  if (nums.length === 0) {
    return 0; // Return 0 if the array is empty
  }

  let result = 1;

  for (let i = 0; i < nums.length; i++) {
    result *= nums[i]; // Multiply each number in the array
  }

  return result;
}

// Example usage:
const numbers = [2, 3, 4, 5];
const productValue = product(numbers);
console.log(`The product of the array is: ${productValue}`);

// longest: return the length of the longest word in an array of words.
function longest(words) {
  if (words.length === 0) {
    return 0; // Return 0 if the array is empty
  }

  let longestLength = 0;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.length > longestLength) {
      longestLength = word.length; // Update the longest length
    }
  }

  return longestLength;
}

// Example usage:
const wordArray = ["apple", "banana", "cherry", "date"];
const longestLength = longest(wordArray);
console.log(`The length of the longest word is: ${longestLength}`);

// everyOther: return a string with every other letter.
function everyOther(str) {
  let result = "";
  for (let i = 0; i < str.length; i += 2) {
    result += str[i]; // Append every other letter to the result
  }
  return result;
}

// isPalindrome: checks whether a string is a palindrome or not.
function isPalindrome(str) {
  // Remove spaces and convert to lowercase for accurate comparison
  const cleanedStr = str.replace(/\s/g, "").toLowerCase();
  const reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr; // Check if the cleaned string is the same reversed
}

// findIndex: return the index of val in arr (or -1 if val is not present).
function findIndex(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i; // Return the index of the value if found
    }
  }
  return -1; // Value not found
}

// revString: return a copy of a string, but in reverse.
function revString(str) {
  return str.split("").reverse().join(""); // Reverse the string
}

// gatherStrings: given an object, return an array of all of the string values.
function gatherStrings(obj) {
  let strings = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      strings.push(obj[key]); // Add string values to the array
    } else if (typeof obj[key] === "object") {
      strings = strings.concat(gatherStrings(obj[key])); // Recursively gather strings
    }
  }
  return strings;
}

// Example usage:
const testString = "Hello, World!";
console.log(everyOther(testString)); // Output: "Hlo ol!"
console.log(isPalindrome("racecar")); // Output: true
const array = [1, 2, 3, 4, 5];
console.log(findIndex(array, 3)); // Output: 2
console.log(revString(testString)); // Output: "!dlroW ,olleH"
const testObj = {
  name: "John",
  age: 30,
  city: "New York",
  message: "Hello, World!",
};
console.log(gatherStrings(testObj)); // Output: ["John", "New York", "Hello, World!"]

// binarySearch: given a sorted array of numbers, and a value,
// return the index of that value (or -1 if val is not present).
function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === val) {
      return mid; // Return the index of the value if found
    } else if (arr[mid] < val) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Value not found
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
