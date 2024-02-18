/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Resolved");
        }, n * 1000);
        resolve("Resolved after " + n + " seconds");
    })
}

function logThis(data) {
    console.log(data);
}

wait(5).then(logThis);

// async function myAsyncFn() {
//     const value = await wait(4);
//     console.log("Resolved after " + n + " seconds promise");
// }

module.exports = wait;
