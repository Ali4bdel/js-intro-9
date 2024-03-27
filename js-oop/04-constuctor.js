/* function Car(year, make, model, price) {
    this.year = year;
    this.make = make;
    this.model = model;
    this.price = price;
}

Car.prototype.drive = function() {
    console.log(`${this.year} ${this.make} ${this.model} drives.`);
}

new Car(2023, 'Tesla', 'S', 10000).drive();

Car.prototype.stop = function() {
    console.log(`${this.year} ${this.make} ${this.model} stops.`);
}

const car1 = new Car(2023, 'Tesla', 'X', 80000);
const car2 = new Car(2022, 'BMW', 'X7', 60000);
const car3 = new Car(2020, 'Tesla', 'Y', 27000);

// 1. Log each car info to the console
// 2. Execute drive and stop functions for each car
// 3. Get each cars price information in the format -> {year make model} is ${price}.
// Example: 2023 Tesla X is $80000. 

const cars = [ car1, car2, car3 ];

for(const car of cars) {
    console.log(car);
    car.drive();
    car.stop();
    console.log(`${car.year} ${car.make} ${car.make} is $${car.price}`);
} */

// AFTER ES6

class Car{
    constructor(year, make, model, price) {
        this.year = year;
        this.make = make;
        this.model = model;
        this.price = price; 
    }

    drive() {
        console.log(`${this.year} ${this.make} ${this.model} drives.`);
    }

    stop() {
        console.log(`${this.year} ${this.make} ${this.model} stops.`);
    }
}

const car1 = new Car(2023, 'Tesla', 'X', 80000);
const car2 = new Car(2022, 'BMW', 'X7', 60000);
const car3 = new Car(2020, 'Tesla', 'Y', 27000);

const cars = [ car1, car2, car3 ];

for(const car of cars) {
    console.log(car);
    car.drive();
    car.stop();
    console.log(`${car.year} ${car.make} ${car.make} is $${car.price}`);
}