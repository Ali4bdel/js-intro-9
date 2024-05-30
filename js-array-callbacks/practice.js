/* const sentences = ['Good morning', 'I like arrays', 'It is Sunday'];

const newArr = [];

for(const word of sentences) {
    newArr.push(word.split(' ')[0]);
}

console.log(newArr); 

const newArr = sentences.map(word => word.split(' ')[0]);

console.log(newArr);

const salaries = [1000.2342, 5234.34533, 721.9786, 3452.50];

console.log(salaries.map(salary => Number(salary.toFixed(2)))); 



const numbers = [10, 5, 100, 77, 50, 65, 0];

console.log(numbers.filter(num => num >= 50)); */

const fruits = [ 'Orange', 'Apple', 'Red apple', 'Pineapple', 'Kiwi'];

fruits.map(fruit => {
    if(fruit.toLowerCase().includes('apple')) return fruit;
});
console.log(fruits.filter(fruit => fruit.toLowerCase().includes('apple')));

const countA = str => str.toLowerCase().split('').filter(x => 'a'.includes(x)).length

console.log(countA("TechGlobal is a QA bootcamp"));
console.log(countA("QA stands for Quality Assurance"));
console.log(countA("Cypress"));

// Write a function named noA() which takes an array of strings as argument and will return a new array with all elements starting with "A" or "a" replaced with "###".

// Examples:
// noA(["javascript", "hello", "123", "xyz"])   ->  ["javascript", "hello", "123", "xyz"]
// noA(["apple", "123", "ABC", "javascript"])   ->  ["###", "123", "###", "javascript"]
// noA(["apple", "abc", "ABC", "Alex", "A"])    ->  ["###", "###", "###", "###", "###"]

const noA = arr => {
    return arr.map(x => {
        if(x.toLowerCase().startsWith('a')) return '###';
        else return x
    })
}

console.log(noA(["javascript", "hello", "123", "xyz"]));
console.log(noA(["apple", "123", "ABC", "javascript"]));
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]));