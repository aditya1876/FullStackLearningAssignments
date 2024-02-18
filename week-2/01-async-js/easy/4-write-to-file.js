const fs = require("fs");

let newContent = "Adding a new line";

fs.writeFile("./week-2/01-async-js/easy/test.md", newContent, { flag: 'a' }, function (err) {
  if (err) {
    console.log("Error occured: " + err);
  }
  else {
    console.log("written successfully");
  }
});

for (let i = 0; i < 10000; i++) {
  //do nothing. go to next loop
}
console.log("from outside");
