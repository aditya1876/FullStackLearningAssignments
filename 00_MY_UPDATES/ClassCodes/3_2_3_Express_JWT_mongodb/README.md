# EXPRESS_JWT_MONGODB
* This example creates a web app that allows user to sign up (saves creds in mongodb), signin (uses jwt to authenticate and verify) and view user data once signed in(app created in express).

* Dependencies
  * express
  * jsonwebtoken
  * mongoose

* Setup
  * create folder
  * touch `index.js` and `README.md`
  * run `npm install` to install all packages
  * run `node index.js` to start server

* Postman:
  * VS code extension
  * Collection - `Week3_express_jwt_mongo`
  * routes:
    * Post - signup
    * Post - signin
    * get - otherUsers