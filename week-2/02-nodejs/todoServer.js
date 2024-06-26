/**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,
  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
    
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123
    
  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
    
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }
    
  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123

    - For any other route not defined in the server return 404

  Testing the server - run `npm run test-todoServer` command in terminal
 */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

//application logic
let todos = [
  {
    "title": "first todo",
    "description": "this is the first todo",
    "isCompleted": false,
  }
]

//list all todos
function getAllTodos() {
  console.log("Returing all Todo items.")
  return todos;
};

function getSingleTodo(id) {
  const required_todo = todos[id - 1];
  console.log("Todo item found.");
  return required_todo;
};

function createNewTodo(title, description, isCompleted) {
  todos.push({ "title": title, "description": description, "isCompleted": isCompleted });
  console.log("Todo item added successfully!");
  console.log(todos);
  return "Todo item added successfully";
};

function updateTodo(id, title, description, isCompleted) {
  todos[id - 1].title = title;
  todos[id - 1].description = description;
  todos[id - 1].isCompleted = isCompleted;
  console.log("Todo item number:" + id + " is updated!");
  console.log(todos);
  return "Todo item number: " + id + " is updated!";
};

function deleteTodo(id) {
  todos.splice(id - 1, 1); //removes the element at index 'id'. 2nd parameter means remove only 1 element.
  console.log("Todo item number: " + id + " is deleted!");
  console.log(todos);
  return "Todo item number: " + id + " is deleted!"
};

//routes
app.get("/", function (req, res) {
  res.send("Welcome to todo app");
});

app.get("/todos", function (req, res) {
  res.status(200).json(getAllTodos());
});

app.get("/todos/:id", function (req, res) {
  const id = req.params.id;
  res.status(200).json(getSingleTodo(id));
});

app.post("/todos", function (req, res) {
  // { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
  const title = req.body.title;
  const description = req.body.description;
  const isCompleted = req.body.isCompleted;
  res.status(200).send(createNewTodo(title, description, isCompleted));
});

app.put("/todos/:id", function (req, res) {
  const id = req.params.id;
  const updated_title = req.body.title;
  const updated_description = req.body.description;
  const updated_isCompleted = req.body.isCompleted;
  if (todos[id]) {
    res.status(200).send(updateTodo(id, updated_title, updated_description, updated_isCompleted));
    console.log("Update successful for id:[" + id + "].");
  }
  else {
    console.log("todo item for the given id: [" + id + "] does not exist.");
    res.statusCode(411).json({ //411 code is for input errors
      msg: `Invalid id provided: ${id}`
    });
  }

  //send 404 when id provided does not exist

});

app.delete("/todos/:id", function (req, res) {
  const id = req.params.id;
  // //reading-writing to a file.
  // fs.readfile(filename, "utf-8", function (err, data) {
  //   res.json({
  //     data
  //   });
  // })


  //in memory code
  if (todos[id]) {
    res.status(200).send(deleteTodo(id));
  }
  else {
    console.log("error in deleting for id: " + id);
    res.sendStatus(404).json({
      msg: "id provided is invalid"
    }); //411 status code is for invalid input
  }
});

//for all other routes, send 404 error


//port
PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

module.exports = app;

// res.status(500).json({
//   status: 500,
//   data: err
// });