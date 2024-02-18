/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      //do nothing
    }, t);
    resolve()
  });
}

function wait2(t) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      //do nothing
    }, t);
    resolve()
  });
}

function wait3(t) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      //do nothing
    }, t);
    resolve()
  });
}

function calculateTime(t1, t2, t3) {
  let startTime = new Date();
  console.log("start time:" + startTime);
  wait1(t1).then(wait2(t2)).then(wait3(t3));
  let endTime = new Date();
  console.log("Ending time: " + endTime);
  console.log(endTime - startTime);
}
calculateTime(1000, 2000, 3000);

module.exports = calculateTime;
