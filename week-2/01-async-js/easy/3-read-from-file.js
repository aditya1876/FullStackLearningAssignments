const fs = require("fs");
let content = null;

fs.readFile("./week-2/01-async-js/easy/test.md", "utf-8", function (err, data) {
  if (err) {
    console.log(err);
  }
  content = data;
  console.log("printing from inside");
  console.log(data);
});
console.log("Printing outside");
console.log(content);
