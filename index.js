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
        + When eating something edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 or more items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

// constructor function
function Person(attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
    this.stomach = [];
}
// give each instance ability to .eat(someFood)
Person.prototype.eat = function(someFood) {
    if (this.stomach.length < 10) this.stomach.push(someFood);
};
// call poop method to empty the stomach array
Person.prototype.poop = () => this.stomach.splice(0, this.stomach.length);
// call method to say name and age 
Person.prototype.toString = () => `${this.name}, ${this.age}`;

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

// Car constructor
function Car(attrs) {
    this.model = attrs.model;
    this.milesPerGallon = attrs.milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
}
// restrictions on adding fuel?
Car.prototype.fill = function(gallons) {
    this.tank += gallons;
};
// d = r*t, 40 mi / gal, dist = 10 mi --> 10 mi / (40 mi/gal) = 10 / 40 = 1/4 = 0.25 gal
Car.prototype.drive = function(distance) {
    // would need to add a condition to see if enough gallons are in tank to drive the distance
    if (distance / this.milesPerGallon > this.tank) console.log("Not enough fuel!");
    else if (this.tank == 0) console.log(`I ran out of fuel at ${this.odometer} miles!`);
    else {
        this.odometer += distance;
        this.tank -= distance / this.milesPerGallon;
    }
};
/* 
mi / (mi/gal) 

= mi * gal / mi 

= (mi * gal) / mi

= gal

*/

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(babyAttrs) {
    Person.call(this, babyAttrs);
    this.favoriteToy = babyAttrs.favoriteToy;
}
// give Person prototypes to Child, pseudo-classical inheritance
Baby.prototype = Object.create(Person.prototype);
// baby methods
Baby.prototype.play = function() {
    console.log(`Playing with ${this.favoriteToy}.`)
};
/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. global binding is when `this` refers to the window object in the browser
  2. implicit binding refers to using `this` inside an object
  3. explicit binding is the use of `this` when using call method linking `this` with a parent
  4. new binding is the utilization of a constructor function to create a new instance applying `this` to
     the object variable name
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
    module.exports = module.exports || {}
    if (Airplane) { module.exports.Airplane = Airplane }
    if (Person) { module.exports.Person = Person }
    if (Car) { module.exports.Car = Car }
    if (Baby) { module.exports.Baby = Baby }
}