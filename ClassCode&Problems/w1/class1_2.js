//JAVASCRIPT BASICS

//printing on console
console.log("Hello World!");
console.log("-------------------");

// Static Vs Dynamic(loosely typed)
let number = 5;
number = "Hello"; //static languages would not allow this
console.log(number);
console.log("-------------------");

//var vs let vs const
//var is old way not used much anymore
//let is used to declare variables
//declaring variable using const makes the variable as constant and cannot be reassigned.
let a = 10;
a = 15;
console.log(a);

const b = 20;
//b=25; //causes error
console.log(b);
console.log("-------------------");

//Data types
//Primitive data types
//1. Number
//2. String
//3. Boolean
let a1 = 10910901;
let b1 = "Hello";
let c1 = true;
console.log("number" + a1 + " string " + b1 + " boolean " + c1);
console.log("-------------------");

//Complex premitive data types
// Arrays
let personArray = ["John", "Doe", "test"];
console.log(personArray[0]); //index starts from 0
console.log(personArray[1]);
console.log(personArray[2]);
console.log(personArray[3]); //gives undefined. no error
console.log(personArray[-1]); //gives undefined. no error

let ages = [20, 21, 22, 23, 24, 25];
//print all even ages
for (let i = 0; i < ages.length; i++) {
  if (ages[i] % 2 == 0) {
    console.log(ages[i]);
  }
}
console.log("-------------------");

//Objects
let obj1 = { personName: "Test", personAge: 30, personEmployed: true };
console.log(obj1.personName); //method 1
console.log(obj1["personAge"]); //method 2
console.log("-------------------");

//array of objects
let objArray2 = [
  { personName: "Test", personAge: 30 },
  { personName: "test2", personAge: 40 },
];

for (let i = 0; i < objArray2.length; i++) {
  console.log("Name: " + objArray2[i].personName);
  console.log("Age: ", objArray2[i].personAge);
}
console.log("-------------------");

//If loop
let c = "female";
if (c == "male") {
  console.log("Hello Mister!");
} else if (c == "female") {
  console.log("Hello Miss!");
} else {
  console.log("what is your gender?");
}
console.log("-------------------");

// for loop
for (let i = 0; i <= 5; i++) {
  console.log(i);
}
console.log("-------------------");

//Functions
function findSum(a, b) {
  return a + b;
}

console.log(findSum(1, 2));
console.log(findSum(0.1, 0.5));
console.log(findSum(-1, 4.5));
console.log(findSum(1, 2, 3)); //no error prints 3
console.log("-------------------");

//Function Callbacks
function findSum2(a, b, fnToCall) {
  return fnToCall(a + b);
}
function displayResult1(data) {
  console.log("Displaying result one way: " + data);
}

function displayResult2(data) {
  console.log("Displaying result another way: " + data);
}
//if we are only allowed to call 1 function from above, how to display sum of numbers?
findSum2(1, 2, displayResult1);
findSum2(1, 2, displayResult2);
console.log("-------------------");

// Synchronous vs Asynchronous functions

// CLASS PROBLEMS
