const express = require("express");
const app = express();

//applicaiton logic
const users = [{
  name: "John",
  kidneys: [{
    healthy: false,
  }]
}];

//routes
app.get("/", function (req, res) {
  console.log(users[0].kidneys);
  res.send("Kidneys:" + users[0].kidneys);
});

//get request that checks for the user creds and user data before doing the actual logic
app.get("/health-checkup", function (req, res) {
  const username = req.headers.username; //to be passed as headers
  const pass = req.headers.password;
  const kidneyCount = req.params.kidneyCount;

  //check user creds - returns if invalid
  if (username != "test" || pass != "tester") {
    res.send(400).json({
      msg: "Username/ password not correct"
    });
    return
  }

  //check if the user input is valid.
  if (kidneyCount > 2 || kidneyCount < 1) {
    res.send(400).json({
      msg: "Kidney count is not proper."
    });
    return
  }

  //if user creds are ok and user input is valid, process the request.
  res.status(200).json({
    msg: "Your kidney count is ok.";
  });

});

//Port
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at https://localhose:${PORT}`);
});


