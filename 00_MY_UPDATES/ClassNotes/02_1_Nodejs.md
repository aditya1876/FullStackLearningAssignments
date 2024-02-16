# NODEJS

* ECMAScript - Specification for writing javascript.
* Javascript - The actual scrpring language. It implements ECMA script and also additional things to work completely.
* Compiler for javascript - For converting javascript code to native machine code.
  * v8 - Engine(compiler) by Chromium/chrome team (developed in C++)
  * Spider+monkey - Engine by firefox (c+Rust)
* Nodejs -
  * Created by taking the V8 engine and added more functionality(reading files, etc) so that java script can also be used to write backend. (so that devs dont have to learn 2 different stacks for frontend and backend)
  * It is a runtime to run javascript without the browser + have the ability to do backend functions

* Bun - 
  * Compititor to Nodejs.

## What can Node do?
* Create CLI
* Create a video player(requires C++)
* Create a game
* Create HTTP Server (most imp)
* other things

## HTTP
* Hyper text transfer Protocol
* protocol defined for machines to communicate
* most common way for website frontend to talk to backend.
* Client Side:
  * protocol(http/ https)
  * Address(URL/ IP/ Port)
  * Route
  * Headers/ body/ query parameters
  * Methods(GET/ POST/ PUT(updating)/ DELETING)
* Server side:
  * Response Headers (cookies, bearer token for authorization of the user, etc)
  * Response Body
  * Status Code(200-all good, 404-page not found, 403-Authentication issues, 500-Internal Server Error)

* Request response cycle
  * When user enters data and hits send/ enter etc
  * Browser parses the URL
  * Does a DNS(domain name service) lookup (converts google.com to IP)
  * Establishes a connection with the IP(handshake)
  * Server gets teh request, Processes it and returns the output.

### GET
* To request data
* data is passed in URL (cant send a lot of data is URL length is limited)
* data is visible (can also be cached, bookmarked)
* Multiple identical requests will have same effect (NOT idempotent)

### POST
* To submit data
* Data sent in request body 
* can send large amount of data
* data not visible(better security)
* Multiple identical requests can have different effects (idempotent)

## Express
* A library that lets us create servers (nextJS is another one)
* Web application framework for node.js, designed to simplify the process of building web applications and APIs.
* Request Object(req): represents the incoming HTTP request from client. Contains information about the request(parameters, headers and body)
* Response Object(res): represents the outgoing HTTP response from server. Can be used to send data, set headers etc.
* Listening: After the server is setup (routes and middleware set up), the server needs to listen for incomming requests.
* Port: Specifies the port on which the server listens for incomming requests.

```bash
#Express Server Creation Process

#1. Create a folder and navigate to it.
mkdir myserver
cd myserver

#Create package.json (that contains the server information)
npm init -y

#Install express globally
npm install express

#Create a file to store the server code and write the logic(SEE NEXT CODE BLOCK)
touch server.js

#run the server
node server.js

#CTRL+C to kill the server

```

```javascript
//CODE FOR server.js
// Import the express module
const express = require('express');
//Import the bodyParser (helps in parsing the body of requests)
const bodyParser = require("body-parser");

// Create an instance of the express application
const app = express();
app.use(bodyParser.json());

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
  res.status(200).send('Hello, this is the root/main route!'); //sends the response code with the required output
});

// Define another route for "/api" with JSON response
app.get('/api', (req, res) => {
  res.json({ message: 'This is the API route.' });
});

//send a post API request from Postman/Thunderclient.
//Create new header value -"Authorization" with some string as value.
//run the post request at http://localhost:3000/postapi
//body of the post request:
//{
//  "msg" : "what is 2+2"
//}

app.post('/postapi', (req, res) => {
  console.log(req.headers);
  console.log(req.headers["authorization"]); //to get a particular parameter 'authorization' in headers
  res.send("Read the authorizaton value: " + req.headers["authorization"]);
  //get the entire body of post request.
  console.log(req.body);//this will return undefined if bodyParser is not imported.
  console.log("msg parameter in the body of post request is: "+req.body.msg);//get a parameter in json
})

// Define a route with URL parameters
app.get('/greet/:name', (req, res) => {
  const { name } = req.params;
  res.send(`Hello, ${name}!`);
});

//PUT route
app.put('/put/:id', (req, res) => {
  res.send('Hello from PUT route!');
});

//DELETE route 
app.delete('/delete/:id', (req, res) => {
  res.send('Hello from DELETE route!');
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//Accessing the server:
//URL - http://localhost:3000
//Routes -  http://localhost:3000/api, http://localhost:3000/greet/:name)
```

> After launching the server, you can access the site from same device in browser or any other device in the same lan network. 
> To access from another device(eg - mobile) in same network, find the ip address of the machine the server is running on (eg-192.168.10.20), open a browser on mobile and  run 'http://192.168.10.20:3000/'

* Every time any change is made to the server, we have to kill and restart the server. To avoid restarting every time you can use 'nodemon' that restarts the server everytime a change is made.

```bash

#Install globally
npm install -g nodemon

#Install locally for the project
npm install --save-dev nodemon

#start the server with nodemon
nodemon server.js

```

### Response Object
* Object used in Express to send response back to client.

```
//Sending Plain Text
app.get('/', (req, res) => {
  res.send('Hello, this is a plain text response!');
});

//Sending JSON
//IT automatically also sets 'Content-Type' header to 'application/json'

app.get('/api/data', (req, res) => {
  const responseData = {
    message: 'This is a JSON response',
    data: {
      key1: 'value1',
      key2: 'value2',
    },
  };

  res.json(responseData);
});

//Sending HTML
app.get('/html', (req, res) => {
  const htmlContent = '<h1>This is an HTML response</h1>';
  res.send(htmlContent);
});

//Redirection
app.get('/redirect', (req, res) => {
  res.redirect('/new-location');
});

//Sending Status code
app.get('/not-found', (req, res) => {
  res.status(404).send('Page not found');
});

//Sending file
const path = require('path');
app.get('/file', (req, res) => {
  const filePath = path.join(__dirname, 'files', 'example.txt');
  res.sendFile(filePath);
});

//Sending headers
app.get('/custom-header', (req, res) => {
  res.set('X-Custom-Header', 'Custom Header Value');
  res.send('Response with a custom header');
});
```

### Managing env variables

* Install dotenv
```bash
npm install dotenv
```

* Create `.env` file in repo
* Add env varibles to it (like below)
```text
PORT=3000
```
* Add the following line to js code

```javascript
require('dotenv').config();
//OTHER CODE

//get port from env variable
const port = process.env.PORT;

//OTHER CODE

//use the env variable
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

### Parsing body

```javascript
//MIDDLEWARE - Built-in to js
//Also see 'body-parser' used above

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(express.json());

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// POST route to handle form data
app.post('/form', (req, res) => {
  const formData = req.body;
  res.json({ receivedData: formData });
});

// POST route to handle JSON data
app.post('/json', (req, res) => {
  const jsonData = req.body;
  res.json({ receivedData: jsonData });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

### Parsing Headers

```javascript
app.get('/get-info', (req, res) => {
  // Access headers from req.headers
  const userAgent = req.headers['user-agent'];
  const acceptLanguage = req.headers['accept-language'];

  res.json({
    userAgent,
    acceptLanguage,
  });
});
```

### Parsing Query Parameters
* Query parameters are usually included in the URL after the "?" character and separated by "&".

```javascript
//url for below get request - 
// https://mysite/api/user?id=123&name=abc+def
app.get('/api/user', (req, res) => {
  // Access query parameters from req.query
  const userId = req.query.id; //123
  const name = req.query.name; //abc+def

  // Process the parameters as needed
  const user = {
    id: userId,
    name: name,
  };

  // Send a JSON response with the parsed parameters
  res.json({ user });
});

```
