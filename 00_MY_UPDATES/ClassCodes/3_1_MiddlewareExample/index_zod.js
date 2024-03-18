const express = require("express");
const zod = require("zod"); //library to do input validations
const app = express();
app.use(express.json()); //expecting the body to be json
function middlewareValidateInputs(obj) {
  //read from req/ body adn do validaton
  //Create schema/template for zod
  const myEmailPassSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8)
  })
  const result = myEmailPassSchema.safeParse(obj);
  console.log(result);
  return result;
}

//routes
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

//ports
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
})