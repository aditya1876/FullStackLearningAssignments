const fs = require("fs");
let content = null;
fs.readFile("./week-2/01-async-js/medium/testfile.txt", "UTF-8", function (err, data) {
  if (err) {
    console.log("Error occured: " + err);
  }
  let content = data;
  let content_list = content.split(" ");
  let updated_list = [];
  let updated_text = "";
  for (let i = 0; i < content_list.length; i++) {
    if (content_list[i].length != 0) {
      updated_text = updated_text + content_list[i] + " ";
      updated_list.push(content_list[i]);
    }
  }
  console.log(content_list);
  console.log(updated_list);
  console.log(updated_text);
  fs.writeFile("./week-2/01-async-js/medium/testfile.txt", updated_text, { flag: 'a' }, function (err1) {
    if (err1) {
      console.log("error in entering data into file:" + err1);
    }
    else {
      console.log("Written successfully.");
    }
  })
});