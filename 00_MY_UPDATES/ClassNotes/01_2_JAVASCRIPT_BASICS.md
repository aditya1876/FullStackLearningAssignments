# JAVASCRIPT BASICS

> Code - [1_2_ClassCodes](../ClassCodes/1_2_ClassCodes.js)

## Interpreted Vs Compiled languages

| Compiled | Interpreted |
|:--------:|:-----------:|
|Entire code needs to compile first| Runs code line by line|
|If there is an error in code, entire program stops| runs the code till the line containing error|
|C++, Java, Rust, Golang|javascript, python|

## Why Javascript
All the web requires some level of javascript. To replace js completely will mean all websites in the world change and new borwsers need to be created.

## Strict Vs Dynamic
> see code

## Single threaded nature of JS
Javascript can only ever run 1 thread and use 1 core of the machine. So it is a bad language for scalable systems.
Read up on 'Cluster Module'

## Simple premitives in JS(number, string, boolean)
>see code

## Complex premitives in JS(arrays, objects)
> see code

## Functions in JS
> see code

## Callback functions
> see code

## Event loops
> see code

## Synchronous Vs Asynchoronous Programming in Javascript
|Synchoronous|Asynchoronous|
|:----------:|:-----------:|
|All code runs line by line. Next line is not started till current line execution is not finished.|Asynchoronous functions can be used to start long running operations while other parts of the code are also running without waiting for the long running process to complete|console.log()|setTimeout(),Fetch() data from API, reading from a file|

> See Code

## Real use of callbacks
This is only really usesul when we want to call anonymous functions.
>See code

## JS browser architecture
```(javascript)
Run following code here to get visual explaination - http://latentflip.com/loupe

console.log("javascript architecture")
function fn1(){
    for (let i=0; i<5; i++){
        console.log("inside fn1: "+i);
    }
}
function fn2(){
    for (let i=0; i<5; i++){
        console.log("inside fn2: "+i);
    }
}
function fn3(){
    console.log("inside fn3");
}
function fn4(){
  console.log("inside fn4");
}

fn1();
setTimeout (function(){console.log("after timeout 1")}, 5000);
fn2();
setTimeout (function(){console.log("after timeout 2)}, 1000)
fn3();
fn4();

//OUTPUT - 
javascript function architecture
inside fn1: 0
inside fn1: 1
inside fn1: 2
inside fn1: 3
inside fn1: 4
inside fn2: 0
inside fn2: 1
inside fn2: 2
inside fn2: 3
inside fn2: 4
inside fn3
inside fn4
after timeout 2
after timeout 1
```
* There are 4 components:
  * Call Stack - tracks the individual calls
  * Web APIs
  * Callback Queue - Stores the functions waiting for main tread to be free
  * Event loop - checks if there are anything waiting in callback queue

* Sequence of Events;
  1. fn1 is called (call stack loaded) and all loops completed (each loop is also loaded to call stack)
  2. Set time out is called(loaded to call stack). Set timeout needs to wait for 5000 ms. it is loaded to webapi for waiting. Main thread goes to next step.
  3. fn2 is started. loaded to call stack. each loop starts to execute.
  4. Set timeout function 2 is started. it is loaded to webapi along with set timeout 1 function. Main thread continues.
  5. Set timeout 2 finishes before set timeout 1. it is moved into the callback queue.
  6. set timeout 1 wait is finished before fn2 completes. It is loaded to Callback queue (after set timeout2) and it waits for the main thread to be free.
  7. fn2 completes
  8. fn3 starts (note the callback queue still has the setTimeout function)
  9. fn3 finshes.
  10. fn4 starts and finishes.
  11. set timeout 2 is moved to call stack and finishes.
  12. set timeout 1 is moved to call stack and finishes.

## Promises

## Async Await
