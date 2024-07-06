const express = require("express");
const app = express();

//MIDDLEWARES
function isPaidMiddleware(req, res, next) {
  const paid = req.query.paid;
  if (paid === "yes") {
    next();
  } else {
    res.json({
      msg: "You need to pay in order to access rides",
    });
  }
}

function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.status(411).json({
      msg: "You are not old enough",
    });
  }
}

//ROUTES
app.get("/", function (req, res) {
  res.json({
    msg: "Welcome to amusement park",
  });
});

app.get("/freeride", function (req, res) {
  res.json({
    msg: "You have ridden 'freeride1' successfully",
  });
});

app.get("/freewithage", isOldEnoughMiddleware, function (req, res) {
  res.json({
    msg: "Free ride, but only for people over 14 yrs of age",
  });
});

app.use(isPaidMiddleware); //all routes below will use this middleware
app.use(isOldEnoughMiddleware); //all routes below will use this middleware

app.get("/ride1", function (req, res) {
  res.json({
    msg: "You have ridden Ride 1 successfully!",
  });
});

app.get("/ride2", function (req, res) {
  res.json({
    msg: "You have ridden Ride 2 successfully!",
  });
});

app.get("/showerror", function (req, res) {
  //simulate an exception to test error handling middleware
  throw new Error("Some exception occured");
});

//Error Handling Middleware - this function is triggered whenever any exception occurs
app.use(function (err, req, res, next) {
  res.status(404).json({
    msg: "Catchall for any exception",
  });
});

//PORT
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}.`);
});
