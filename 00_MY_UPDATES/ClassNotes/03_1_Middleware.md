# MIDDLEWARE

> Code - 00_MY_UPDATES/ClassCodes/3_1_MiddlewareExample

* Mainly used to validate the requests coming to the server before actually processing it.
* Example: (doctor)
  * Doctor's cabin - Application logic
  * Waiting Room - Callback queue
  * Intermediate - Middlewares
    * Blood test (authentication)
    * BP test (some other check)
    * sugar test (some other middleware check)

## Some points
* middleware functions are called from the route functions. passed as arguemetns.
* Middlewares can take req, response object from calling function
* next() is used to pass the control back to next middleware function(next middleware fn or route function). If next is not provided, req-res cycle stops and client does not receive any update(webpage keeps loading).
* You can only pass reponse once to the page. if you pass res in any middleware, subsequent function will not be able to provide any data to webpage(so recommended to pass the data to the route function and then send the data in the response of route function)
* app.use() can be used for middleware functions that are used in every route. So it will be called whenever any route is called. (Technically, it will be called for every route listed after app.use()).
* app.use(express.json()) is a common middleware to parse json in request body
### Global catches
* used to catch any unhandled exception / error that may occur.
* app.use() can be used for this. This app.use needs to be called in the end, so that if any route causes errors, this function is called. 
* This function needs to have extra parameter in argument.
* Global catch blocks allow you to centrally manage and handle errors that occur anywhere in your application. Instead of handling errors at each specific location, you can capture and process them in a centralized location(Centralized handling)
* Using a global catch mechanism ensures a consistent approach to error handling throughout the application. You can define how errors are logged, reported, or displayed in one place, making it easier to maintain a uniform user experience.(Consistent error handling)
* Global catches often serve as a fallback mechanism. If an unexpected error occurs and is not handled locally, the global catch can capture it, preventing the application from crashing and providing an opportunity to log the error for further analysis. (Fallback mechanism)

```javascript
/**
 * - Functions m1, m2,m3 are middlewares.
 * - next() should be called in all middlewares.
 * - / and /test are routes
 * - Function m3 is called only when / is called.
 * - Functions in app.use() are called first.
 * - app.use(m1) is called above both the route functions (/ and /test), so middleware m1 will be called when any of the routes are called. 
 * - app.use(m2) is called above /test, so it will only be called for routes defined below it. so for /test only.
 * - last app.use(error_m4) is used to catch all uncaught errors/ exception so that a clean output is displayed to the user.(and not code). Notice the extra 'err' arguement used in this function.
 
 * OUTPUT WHEN / IS CALLED:
 * m1
 * m3
 * In / route
 * 
 * OUTPUT WHEN /test IS CALLED:
 * m1
 * m2
 * In /test route
 * 
 * OUTPUT WHEN /Testing is CALLED:
 * m1
 * m2
 * 
 * OUTPUT WHEN /error IS CALLED:
 * m1
 * m2
 * in /error route
 * something went wrong (displayed on webpage)
 *   
*/

const express = require("express");
const app = express();
app.use(express.json());

function m1(req, res, next){
  console.log("m1");
  next();
}
function m2(req, res, next){
  console.log("m2");
  next();
}
function m3(req, res, next){
  console.log("m3");
  next();
}
function error_m4(err, req, res, next){
  res.status(500).json({msg: "Something went wrong"});
  //next(); //next can be used if any other function to call?
}

app.use(m1);
app.route("/",m3, function(req, res){
  console.log("In / route");
})
app.use(m2);
app.route("/test", function(req, res){
  console.log("In /test route");
})

app.route("/error", function(req, res){
  console.log("in /error route");
  throw new Error("Throwing error for global catch");
})

//global catches
app.use(error_m4);

app.listen(3000);

```

### ZOD
* TypeScript-First Approach: Zod is designed with TypeScript in mind, providing strong type-checking and autocompletion for your schemas.
* Concise and Expressive Syntax: Zod's syntax is concise and expressive, making it easy to define complex data structures with minimal code.
* Validation and Parsing: Zod not only validates data but also automatically parses it into the expected TypeScript types.
* Rich Set of Features: Zod includes a variety of features, such as custom validation, optional and nullable types, union and intersection types, making it a powerful tool for data validation in your applications.

```javascript
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
```

```javascript
// Zod Schemas
//String
const schema = z.string(); //string

//array of number
const numbersSchema = z.array(z.number());

//object
const userSchema = z.object({
  username: z.string(),
  age: z.number(),
});

//nested schema
const addressSchema = z.object({
  street: z.string(),
  city: z.string(),
});
const userSchema = z.object({
  username: z.string(),
  address: addressSchema,
});

//union and intersection
const numberOrStringSchema = z.union([z.number(), z.string()]);
const combinedSchema = z.intersection([userSchema, addressSchema]);

//can also provide optional or nullable properties
const userSchema = z.object({
  username: z.string(),
  age: z.optional(z.number()),
  email: z.nullable(z.string()),
});

//custom validation logic using refine method
const positiveNumberSchema = z.number().refine((num) => num > 0, {
  message: 'Number must be positive',
});

//parse method to check the data.
try {
  const userData = userSchema.parse({
    username: 'john_doe',
    age: 25,
    address: {
      street: '123 Main St',
      city: 'Exampleville',
    },
  });
  console.log('Parsed data:', userData);
} catch (error) {
  console.error('Validation error:', error.errors);
}
```

