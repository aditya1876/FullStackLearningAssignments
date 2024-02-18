let counter = 10;

setInterval(function () {
  counter = counter - 1;
  if (counter > 0) {
    console.log("Timer left: " + counter + " secs.");
  }
  else {
    console.log("Time's Up!");
  }
}, 1000);
