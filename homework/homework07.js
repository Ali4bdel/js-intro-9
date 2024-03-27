// TASK 1

function hasUpperCase(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            return true;
        }
    }
    return false;
}

console.log(hasUpperCase("javascript"));
console.log(hasUpperCase("John"));
console.log(hasUpperCase("$125.0"));
console.log(hasUpperCase(""));

// TASK 2

function noDigit(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (isNaN(parseInt(str[i]))) {
            result += str[i];
        }
    }
    return result;
}

console.log(noDigit(""));
console.log(noDigit("Javascript"));
console.log(noDigit("123Hello"));
console.log(noDigit("123Hello World149"));
console.log(noDigit("123Tech456Global149"));

// TASK 3

function noVowel(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (!'aeiouAEIOU'.includes(char)) {
            result += char;
        }
    }
    return result;
}

console.log(noVowel("TechGlobal"));
console.log(noVowel("AEOxyz"));
console.log(noVowel("Javascript"));
console.log(noVowel(""));
console.log(noVowel("125$"));

// TASK 4

function no13(arr) {
    return arr.map(num => num === 13 ? 0 : num);
}

console.log(no13([1, 2, 3 ,4]));
console.log(no13([13, 2, 3]));
console.log(no13([13, 13, 13 , 13, 13]));
console.log(no13([]));

// TASK 5

function middleInt(a, b, c) {
    const sorted = [a, b, c].sort((x, y) => x - y);
    return sorted[1];
}

console.log(middleInt(1, 2, 2));
console.log(middleInt(5, 5, 8));
console.log(middleInt(5, 3, 5));
console.log(middleInt(1, 1, 1));
console.log(middleInt(-1, 25, 10));

// TASK 6

function sumOfDigits(str) {
    let sum = 0;
    for (let char of str) {
        const digit = parseInt(char);
        if (!isNaN(digit)) {
            sum += digit;
        }
    }
    return sum;
}

console.log(sumOfDigits("Javascript"));
console.log(sumOfDigits("John’s age is 29"));
console.log(sumOfDigits("$125.0"));
console.log(sumOfDigits(""));

// TASK 7

function arrFactorial(arr) {
    function factorial(num) {
        if (num === 0 || num === 1) {
            return 1;
        } else {
            return num * factorial(num - 1);
        }
    }

    return arr.map(num => factorial(num));
}

console.log(arrFactorial([1, 2, 3, 4]));
console.log(arrFactorial([0, 5]));
console.log(arrFactorial([5, 0, 6]));
console.log(arrFactorial([]));

// TASK 8

