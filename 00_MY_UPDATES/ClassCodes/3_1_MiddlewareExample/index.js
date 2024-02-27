const express = require("express");
const zod = require("zod"); //library to do input validations
const app = express();

//middleware
// middleware - function to read body of post requests(this is requried for express to know the kind of body to expect)
app.use(express.json()); //expecting the body to be json
//middleware - validate the inputs provided in routes using zod
function middlewareValidateInputs(obj) {
  //read from req/ body adn do validaton
  const myEmailPassSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8)
  })
  //There are many other zod schema to use and can be googled as required.
  const result = myEmailPassSchema.safeParse(obj);
  console.log(result);
  return result;
}
//middleware - count the number of requests coming to the server.
const requestCount = 0;
function increaseRequestCount() {
  requestCount++
  console.log("Number of requests: " + requestCount);
}

//application logic

//routes
app.get("/", function (req, res) {
  increaseRequestCount(); //calling middleware
  res.status(200).json({
    msg: `You are the ${requestCount} th visitor to this site.`
  });
});

app.post("/login", function (req, res) {
  const response = middlewareValidateInputs(req.body);
  if (!response.success) {
    res.status(403).json({
      msg: "Username/ password is invalid"
    });
    return;
  }
  //other logic if response is success.
})



//Middleware - catch all other exceptions that are not explicitly handled in routes(get, post) so that user does not see error stacktrace
// - needs to be added after the routes
// - needs to take 4 arguements (err, req, res, next). Express recognises this as the error handling middle ware.
let errorCount = 0;
app.use(function (err, req, res, next) {
  errorCount++; // counts the number of errors happening on the server.
  res.status(500).send("An internal server error occured");
});
//ports
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
})