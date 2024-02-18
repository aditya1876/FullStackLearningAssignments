
setInterval(function () {
  let currDate = new Date();
  let hours = currDate.getHours();
  let mins = currDate.getMinutes();
  let secs = currDate.getSeconds();
  console.log(hours + ":" + mins + "::" + secs);
  if (hours > 12) {
    newhrs = hours - 12;
    ampm = "PM";
  }
  else {
    newhrs = hours;
    ampm = "AM";
  }
  console.log(newhrs + ":" + mins + "::" + secs + " " + ampm);

}, 1000);