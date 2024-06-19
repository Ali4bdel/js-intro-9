// Task 01
/*
Write a function named toInitials() which takes a string argument considered 
to be full name and returns initials of the given full name.
NOTE: Initials should be separated with a space and followed with a period.
Assume you will always be given first name and last name only. 
Examples
toInitials( "Joe Doe")  -> "J. D."
toInitials( "Alex Reyes")  -> "A. R."
toInitials( "Tom Cruise")  -> "T. C."
toInitials( "Bruce Willis")  -> "B. W."
toInitials( "Ja Le")  -> "J. L."
*/

// since we know there is always a space that saprate the words, we can split from space and get first index of each word.

const toInitials = (str) => {
  str = str.split(" ");
  const firstInital = str[0][0];
  const secondInital = str[1][0];

  return firstInital + "." + secondInital + ".";
};

console.log(toInitials("Joe Doe"));
console.log(toInitials("Alex Reyes"));
console.log(toInitials("Tom Cruise"));
console.log(toInitials("Bruce Willis"));
console.log(toInitials("Ja Le"));

// Task 02


/*
Write a function named hasNumbers() which takes a string argument and 
returns true if there is a number and false if there isn’t. 
Examples:
hasNumbers("")  -> false
hasNumbers("John is 34 years old")  -> true
hasNumbers("Hello 3")  -> true
hasNumbers("125$")  -> true
hasNumbers("   a   ")  -> false
hasNumbers("      ")  -> false
hasNumbers("!@#$%^&*()_+")  -> false
*/

const hasNumbers = (str) => {
  for (let char of str) {
    if (!isNaN(Number(char)) && char != " ") return true;
  }
  return false;
};
console.log(hasNumbers(""));
console.log(hasNumbers("John is 34 years old"));
console.log(hasNumbers("Hello 3"));
console.log(hasNumbers("125$"));
console.log(hasNumbers("   a   "));
console.log(hasNumbers("      "));
console.log(hasNumbers("!@#$%^&*()_+"));

// Task 03


/*
Write a function named elementLength() which takes an array argument and 
returns the length of each element as a separate array.
Examples:
elementLength( [ "Hello", "World" ] )  -> [ 5, 5 ]
elementLength( [ "Apple", "Banana", "Orange", "Pear" ] )  -> [ 5, 6, 6, 4 ]
elementLength( ["BMW", "Mercedes", "Audi" ] )  -> [ 3, 8, 4 ]
elementLength( [ ] )  -> [ ]
elementLength( [ "Trampoline", "", "Tennis", "Basketball" ] )  -> [ 10, 0, 6, 10 ]
*/

const elementLength = (arr) => {
  wordsLength = [];
  for (let word of arr) {
    wordsLength.push(word.length);
  }
  return wordsLength;
};

console.log(elementLength(["Hello", "World"]));
console.log(elementLength(["Apple", "Banana", "Orange", "Pear"]));
console.log(elementLength(["BMW", "Mercedes", "Audi"]));
console.log(elementLength([]));
console.log(elementLength(["Trampoline", "", "Tennis", "Basketball"]));

// Task 04


/*
Write a function named isArraySumEvenOrOdd() which takes an array of 
numbers and calculates if the sum of its elements is even or odd.
Note: If the array is empty return even.
Examples:
isArraySumEvenOrOdd( [ ] )  -> "even"
isArraySumEvenOrOdd( [ 0,-1,-5 ] )      -> "even"
isArraySumEvenOrOdd( [ 7,1, 8,1 ] )     ->  "odd”
isArraySumEvenOrOdd( [ 0,0 ] )  ->  "even"
isArraySumEvenOrOdd( [ 1,1,1,1,1 ] )   ->  "odd”
*/

const isArraySumEvenOrOdd = (arr) => {
  if (arr.length === 0) return "even";
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  if (sum % 2 === 0) return "even";
  else return "odd";
};

console.log(isArraySumEvenOrOdd([]));
console.log(isArraySumEvenOrOdd([0, -1, -5]));
console.log(isArraySumEvenOrOdd([7, 1, 8, 1]));
console.log(isArraySumEvenOrOdd([0, 0]));
console.log(isArraySumEvenOrOdd([1, 1, 1, 1, 1]));

// Task 05



/*
Write a function named reverse() which takes a string argument and returns the given string 
reversed. 
Examples:
reverse("Hello World")  -> "dlroW olleH"
reverse("TechGlobal")  -> "labolGhceT"
reverse("Basketball is fun")  -> "nuf si llabteksaB"
reverse("")  -> ""
reverse("Apples 456")  -> "654 selppA"
*/

const reverse = (str) => {
  return (str = str.split("").reverse().join(""));
};

console.log(reverse("Hello World"));
console.log(reverse("TechGlobal"));
console.log(reverse("Basketball is fun"));
console.log(reverse(""));
console.log(reverse("Apples 456"));

// Task 06


/*
Write a function named reverseWords() which takes a string argument and returns a string 
with each word within that string reversed but still in the same order as the initial string. 
Examples:
reverseWords("Hello World")  -> "olleH dlroW"
reverseWords("TechGlobal")  -> "labolGhceT"
reverseWords("Basketball is fun")  -> "llabteksaB si nuf"
reverseWords("")  -> "”
reverseWords("Apples 456")  -> "selppA 654"
*/

const reverseWords = (str) => {
  const words = str.split(" ");
  const reversed = words.map((word) => word.split("").reverse().join(""));
  return reversed.join(" ");
};
console.log(reverseWords("Hello World"));
console.log(reverseWords("TechGlobal"));
console.log(reverseWords("Basketball is fun"));
console.log(reverseWords(""));
console.log(reverseWords("Apples 456"));