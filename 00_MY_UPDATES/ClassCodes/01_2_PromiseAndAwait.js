// ALL 3 methods below do the same thing.
// All 3 methods below use callbacks under the hood.

console.log("====CODE WITHOUT PROMISE OR AWAIT====");
function myTimeout(fnToCallback) {
  setTimeout(fnToCallback, 2000);
}

function logThis() {
  console.log("Hello!");
}
myTimeout(logThis);
console.log("=======================");

console.log("===CODE WITH PROMISE===");
function myTimeout2() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      //do nothing after waiting
    }, 5000);
    resolve("Hello2!");
  });
}

function logThis2(data) {
  console.log(data);
}

myTimeout2().then(logThis2);
console.log("===========================");

console.log("===CODE WITH ASYNC,AWAIT===");
function myTimeout3() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      //do nothing;
    }, 10000);
    resolve("Hello3!");
  });
}

async function myAsyncFn() {
  const value = await myTimeout3();
  console.log(value);
}

myAsyncFn();
console.log("===========================");