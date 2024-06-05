// Task 01

/*
Write a function named toCamelCase() which takes a string as its argument 
and returns a new string in camelCase. Assume the string only contains letters 
and spaces
Examples:
toCamelCase("first name")  ->"firstName"
toCamelCase("last     name")  ->"lastName"
toCamelCase("   ZIP CODE")  ->"zipCode"
toCamelCase(“I Learn Java Script”)    -> "iLearnJavaScript"
toCamelCase(“helloWorld”)     -> “helloWorld”
*/

/*
remove all extra spaces from the str using trim
change str to arr using split
loop the arr and find all spaces
when encounter a space replace it with the next letter but with upper case
retrun the array back and use .join to make it a string again
*/
const toCamelCase = (str) => {
  let words = str.trim().split(/\s+/);
  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      words[i] = words[i].toLowerCase();
    } else {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
  }
  return words.join("");
};

console.log(toCamelCase("first name"));
console.log(toCamelCase("last     name"));
console.log(toCamelCase("   ZIP CODE"));
console.log(toCamelCase("I Learn Java Script"));
console.log(toCamelCase("helloWorld"));

// Task 02

const toSnakeCase = (str) => {
  let words = str.trim().split(/\s+/);
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].toLowerCase();
  }

  return words.join("_");
};

console.log(toSnakeCase("first name"));
console.log(toSnakeCase("last    name"));
console.log(toSnakeCase("    I love Java Script"));
console.log(toSnakeCase("already_snake_case"));
console.log(toSnakeCase("hello"));

// Task 03

const alternatingCases = (str) => {
  let result = [];
  let toggle = true;

  str.split("").forEach((char) => {
    if (/[a-zA-Z]/.test(char)) {
      if (toggle) {
        result.push(char.toUpperCase());
      } else {
        result.push(char.toLowerCase());
      }
      toggle = !toggle;
    } else {
      result.push(char);
    }
  });

  return result.join("");
};

console.log(alternatingCases("Hello"));
console.log(alternatingCases("basketball"));
console.log(alternatingCases("Tech Global"));
console.log(alternatingCases(""));
console.log(alternatingCases("123!@#aB"));

// Task 04

const isNeutral = (str1, str2) => {
  let result = "";

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str2[i]) {
      result += str1[i];
    } else {
      result += "0";
    }
  }

  return result;
};

console.log(isNeutral("-", "+"));
console.log(isNeutral("-+", "-+"));
console.log(isNeutral("-++-", "-+-+"));
console.log(isNeutral("--++--", "++--++"));
console.log(isNeutral("+++", "+++"));

// Task 05

const isTrueOrFalse = (str) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const firstHalf = new Set("ABCDEFGHIJKLM");
  const secondHalf = new Set("NOPQRSTUVWXYZ");

  let positiveCount = 0;
  let negativeCount = 0;

  let words = str.split(" ");

  words.forEach((word) => {
    let firstLetter = word.charAt(0).toUpperCase();

    if (firstHalf.has(firstLetter)) {
      positiveCount++;
    } else if (secondHalf.has(firstLetter)) {
      negativeCount++;
    }
  });

  return positiveCount >= negativeCount;
};

console.log(isTrueOrFalse("A big brown fox caught a bad rabbit"));
console.log(isTrueOrFalse("Xylophones can obtain Xenon."));
console.log(isTrueOrFalse("CHOCOLATE MAKES A GREAT SNACK"));
console.log(isTrueOrFalse("All FOoD tAsTEs NIcE for someONe"));
console.log(isTrueOrFalse("Got stuck in the Traffic"));