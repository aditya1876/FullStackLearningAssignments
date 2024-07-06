const express = require("express");
const jwt = require("jsonwebtoken");  //import library for json web token
const jwtPassword = "12345";  //password for the jwt token. Required for authenticating the jwt. Keep it secret

const app = express();
app.use(express.json()); ``

const USERS_ALL = [
  {
    "username": "test1",
    "password": "test1pass",
    "name": "test user1"
  },
  {
    "username": "test2",
    "password": "test2pass",
    "name": "test user2"
  },
  {
    "username": "test3",
    "password": "test3pass",
    "name": "test user3"
  }
]

//APP LOGIC
function userExists(username, password) {
  let userExists = false;
  for (let i = 0; i < USERS_ALL.length; i++) {
    if (USERS_ALL[i].username == username && USERS_ALL[i].password == password) {
      userExists = true;
      // break;
    }
  }

  return userExists;
}

//ROUTES
app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User does not exists in our memory DB."
    })
  }
  //if user is found, create a token(encode the username in it using the jwtpassword) and send it back
  let token = jwt.sign({ username: username }, jwtPassword);
  return res.json({ token });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;

  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;

    //return list of users other than the signed in user
    res.json({
      users: USERS_ALL.filter(function (value) {
        if (value.username == username) {
          return false;
        } else {
          return true;
        }
      })
    });

  } catch (err) {
    return res.status(403).json({ msg: "Invalid token" });
  }

});

//listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
})