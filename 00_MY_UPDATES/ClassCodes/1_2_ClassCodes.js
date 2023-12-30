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
findSum2(1, 2, displayResult1);
findSum2(1, 2, displayResult2);
console.log("-------------------");

// Synchronous vs Asynchronous functions

//CODE SAMPLES
//================
console.log("CODE SAMPLES")
//STRINGS
//---------
console.log("---------------------------------------");
str = "Hello world"
console.log("Original String: " + str);
console.log("String length: " + str.length);
console.log("Index of 'world': " + str.indexOf("world"));
console.log("Last index of 'world' in 'hello world world': " + "hello world world".lastIndexOf("world"));
console.log("Slicing a string(frist 3 chars): " + str.slice(0, 3));
console.log("Substring of string(frist 3 chars): " + str.substring(0, 3));
console.log("Replacing part of a string: " + str.replace("world", "javascript"));
console.log("Splitting a string(splitting on 'space' in this case): " + str.split(" "));
console.log("Trimming before and after spaces in ' Hello world ': " + " Hello World ".trim());
console.log("To upper case: " + str.toUpperCase());
console.log("To lower case: " + str.toLowerCase());

//NUMBERS
//-----------
console.log("---------------------------------------");
console.log("ParseInt of '42': " + parseInt("42"));
console.log("ParseInt of '42px': " + parseInt("42px"));
console.log("ParseInt of '3.14': " + parseInt("3.14"));
console.log("ParseInt of 3.14: " + parseInt(3.14));
console.log("ParseInt of -123.14: " + parseInt(-123.14));
console.log("ParseFloat of '42': " + parseFloat("42"));
console.log("ParseFloat of '42px': " + parseFloat("42px"));
console.log("ParseFloat of '3.14': " + parseFloat("3.14"));
console.log("ParseFloat of 3.14: " + parseFloat(3.14));
console.log("ParseFloat of -123.14: " + parseFloat(-123.14));

//ARRAYS
//-----------
console.log("---------------------------------------");
let arr = [1, 2, 3, 4, 5]
console.log("Original Array: " + arr);
console.log("Push (adds elements to the end of the array) and returns the new array length: " + arr.push(2) + " Resulting array: " + arr);
console.log("Pop removes the last element of array(returns the removed element): " + arr.pop() + " Resulting array: " + arr);
console.log("Shift removes the 1st element of array (returns the shifted/removed element): " + arr.shift() + " Resulting array: " + arr);
console.log("Unshift adds element at the begining of array (returns new array length): " + arr.unshift(10, 11) + " Resulting array: " + arr);
console.log("Concatination of [1,2,3] and ['a','b','c']: " + [1, 2, 3].concat(["a", "b", "c"]));
arr = [1, 2, 3, 4, 5];
console.log("Original Array: " + arr);
console.log("FOR EACH: runs a function on each element of array. (display element for each element): ");
arr.forEach(function (item) { console.log(item) });
console.log("MAP: Applies a function on each element of array. (display element*2 for each element): ");
arr.map(function (item) { console.log(item * 2) });
let newArr = arr.map(function (item) { return item * 2 }); //can be passed to another variable
console.log(newArr);
console.log("FILTER: Checks the filter condition on each element of array. Each check returns True/false. (eg: display elements >3): ");
console.log("original array: " + arr);
arr.filter(function (item) { console.log(item > 3) })
newArr = arr.filter(function (item) { return item > 3 });
console.log(newArr);
console.log("FIND: finds elements that match the find condition (eg: find elements >3): ");
console.log("Original array: ", arr);
arr.find(function (i) { console.log(i > 3) });
newArr = arr.find(function (i) { return i > 3 });
console.log(newArr);
console.log("SORT: Sorts the array?? ");
console.log("Original array: " + arr);
newArr = arr.sort(function (a, b) { return a - b });
console.log("After sort: ", newArr);

//OBJECTS
console.log("---------------------------------------");
console.log("Object manipulation")
const obj = {
  key1: "value1",
  key2: 123,
  key3: "value3",
};
console.log("Original Object:", obj);
console.log("Object keys: ", Object.keys(obj));
console.log("Object Values: ", Object.values(obj));
console.log("Object Entries: ", Object.entries(obj));
console.log("Object hasOwnProperty(): ", obj.hasOwnProperty("key2"), obj.hasOwnProperty("key5"));
console.log("After Adding new property to object: ", Object.assign(obj, { key4: "value4" }));
console.log("Directly accessing the object values: ", obj.key1, obj.key2);

//Math
console.log("---------------------------------------");
console.log("Math");
let value1 = 10
let value2 = -1.6
let value3 = 2.45
console.log("Original value1, value2, value3: ", value1, value2, value3)
console.log("Rounding value1, value2, value3: ", Math.round(value1), Math.round(value2), Math.round(value3));
console.log("Ceiling value1, value2, value3: ", Math.ceil(value1), Math.ceil(value2), Math.ceil(value3));
console.log("Flooring value1, value2, value3: ", Math.floor(value1), Math.floor(value2), Math.floor(value3));
console.log("Powering by 2 value1, value2, value3: ", Math.pow(value1, 2), Math.pow(value2, 2), Math.pow(value3, 2));
console.log("Squarerooting value1, value2, value3: ", Math.sqrt(value1), Math.sqrt(value2), Math.sqrt(value3));
console.log("Random values:", Math.random());
console.log("Max of value1, value2, value3: ", Math.max(value1, value2, value3));
console.log("Min of value1, value2, value3: ", Math.min(value1, value2, value3));

//JSON
console.log("---------------------------------------");
console.log("JSON")
const sampleJSONString = '{ "key": "value", "number": 42, "nested": { "nestedKey": "nestedValue" } }';
console.log("Original JSON String:", sampleJSONString);
console.log("After JSON.parse():", JSON.parse(sampleJSONString));
console.log("After JSON.stringify():", JSON.stringify(sampleJSONString));

//DATE
console.log("---------------------------------------");
console.log("DATE");
const currentDate = new Date();
console.log("Current Date: " + currentDate);

// Getting various components of the date
console.log("Date:", currentDate.getDate());
console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
console.log("Year:", currentDate.getFullYear());
console.log("Hours:", currentDate.getHours());
console.log("Minutes:", currentDate.getMinutes());
console.log("Seconds:", currentDate.getSeconds());

// Setting components of the date
currentDate.setFullYear(2022);
console.log("Setting current year as 2022:", currentDate);

currentDate.setMonth(5); // Setting month to June (zero-indexed)
console.log("Setting current month as 5:", currentDate);

// Getting and setting time in milliseconds since 1970
console.log("Time in milliseconds since 1970:", currentDate.getTime());

const newDate = new Date(2023, 8, 15); // Creating a new date
console.log("New Date:", newDate);

// CLASS PROBLEMS
// Write a program to print the biggest number in an arrya
let arr2 = [-2, 3.99, 4, 523]
function getMax(arr1) {
  let max = arr1[0];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > max) {
      max = arr1[i];
    }
  }
  return max;
}
console.log(getMax(arr2))

//Write a program that prints all the male people’s first name given a complex object
objarr2 = [
  { pName: "test1", pAge: 20, pSex: 'M' },
  { pName: "test2", pAge: 30, pSex: 'M' },
  { pName: "test3", pAge: 40, pSex: 'F' }
]

for (let i = 0; i < objarr2.length; i++) {
  if (objarr2[i].pSex == "M") {
    console.log(objarr2[i].pName);
  }
}

//Write a program that reverses all the elements of an array
arr3 = [2, 3, 4, 5, 6, 7]
for (let i = 0; i < arr3.length / 2; i++) {
  temp = arr3[i]
  arr3[i] = arr3[arr3.length - 1 - i]
  arr3[arr3.length - 1 - i] = temp
}
console.log(arr3);

//CLASS ASSIGNMENTS
//1. Create a counter in Javascript(counts down from 30 to 0)
function count30() {
  for (let i = 30; i >= 0; i--) {
    console.log(i);
  }
}
count30()

//2. Calculate the time it takes between a setTimeout call and the inner function actually running
let beforeStartMilli, insideFnMilli;
function printHi() {
  currDate = new Date();
  startTime = currDate.getHours() + ":" + currDate.getMinutes() + ":" + currDate.getSeconds() + ":" + currDate.getMilliseconds();
  console.log("Inside function: " + startTime);
  console.log("Milliseconds taken to launch setTimeout function: " + (currDate.getMilliseconds() - startDate.getMilliseconds()))
}
let startDate = new Date();
let startTime = startDate.getHours() + ":" + startDate.getMinutes() + ":" + startDate.getSeconds() + ":" + startDate.getMilliseconds();
console.log("Start Time: " + startTime);
setTimeout(printHi, 1000);

//3. Create a terminal clock(HH: MM: SS)
console.log("TERMINAL CLOCK");
console.log("===============");
function showTime() {
  let currDate1 = new Date();
  let currTime1 = currDate1.getHours() + ":" + currDate1.getMinutes() + ":" + currDate1.getSeconds();
  console.log(currTime1);
}

function terminalClock() {
  setInterval(showTime, 1000);
}

terminalClock()

