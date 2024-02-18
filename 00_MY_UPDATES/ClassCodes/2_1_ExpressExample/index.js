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

//Port
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at https://localhose:${PORT}`);
});


