/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function() {
  this.isFlying = true;
};
Airplane.prototype.land = function() {
  this.isFlying = false;
};
  
  
/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}
Person.prototype.eat = function(food) {
  if (this.stomach.length < 10) this.stomach.push(food);
}
Person.prototype.poop = function() {
  this.stomach = [];
}
Person.prototype.toString = function() {
  return `${this.name}, ${this.age}`
}

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}
Car.prototype.fill = function(gallons) {
  this.tank += gallons;
}
Car.prototype.drive = function(distance) {
  this.odometer++;
  if (this.tank > 0 && (this.odometer % this.milesPerGallon === 0)) this.tank--; // if odo & mpg have perfect division, then the total miles now equal an amount perfectly divisible by mpg and we should decrement the tank
  else return `I ran out of fuel at ${odometer} miles!`;
}

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  this.name = name;
  this.age = age;
  this.favoriteToy = favoriteToy;
}
//Baby.prototype.call(this, name, age, favoriteToy); // not needed on this demo, because the project explicitly passes args to Baby
Baby.prototype = Object.create(Person.prototype); // inherit Person methods
Baby.prototype.play = function() { // add method:play to class:Baby
  return `Playing with ${this.favoriteToy}`
}
// how i believe the task above meant for us to do (but because the test passes values to Baby, we shouldn't pass the values through the ,call() function here):
// function Baby(name, age, favoriteToy) {
//   Baby.prototype.call(this, name, age, favoriteToy);
//   this.favoriteToy = favoriteToy;
// }
// Baby.prototype = Object.create(Person.prototype);
// Baby.prototype.play = function() {
//   return `Playing with ${this.favoriteToy}`
// }

/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. global/window binding: should never use
  2. implicit binding: useful
  3. 'new' binding: for inheritance, and the vast majority of cases
  4. explicit binding: for covering nuanced reasons
*/
  
  
///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  return 'bar';
}

export default{
  foo,
  Person, 
  Car,
  Baby
}