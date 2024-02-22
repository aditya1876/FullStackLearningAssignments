/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const { promiseHooks } = require('v8');
const app = express();

//application logic
function getFiles(dir) {
  //get list of entries in the directory.
  const fileList = fs.readdirSync(dir)
  let files = []

  //check if the item is a directory, if yes, run this function on the folder again
  fileList.forEach((element) => {
    const filePath = `${dir}/${element}`;
    if (fs.statSync(filePath).isDirectory()) {
      files.push(getFiles(filePath));
    }
    else {
      files.push(filePath);
    }
  })

  return files;
}

function getFileContent(filename) {
  const filePath = "./files/" + filename;
  console.log(filePath);
  return new Promise(function (resolve) {
    let fileContent = fs.readFile(filePath, function (err, data) {
      if (err) {
        return "Unable to read file due to error: " + err;
      }
      else {
        return data;
      }
    })
    resolve(fileContent);
  });
}

function returnData(data) {
  return data;
}

//routes
app.get("/", function (req, res) {
  res.send("Welcome to file server!");
});

app.get("/files", function (req, res) {
  res.status(200).send(getFiles("./files"));
})

app.get("/files/:filename", function (req, res) {
  const filename = req.params.filename;
  let fileData = getFileContent(filename).then(returnData);
  res.status(200).send(fileData);
})

//port
PORT = 3001
app.listen(PORT, () => {
  console.log(`Server is running at https://localhost:${PORT}`);
})


module.exports = app;