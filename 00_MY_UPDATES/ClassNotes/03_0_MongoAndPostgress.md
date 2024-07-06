# MONGODB

* login to mongodb
* create Org
* Create project
* Add database
  * select free cluster and other default options and create.
  * Add username password -- copy the username/ password. They will be required later.
  * 'Where would you like to connect from?'
    * 0.0.0.0/0 (name it. eg - everywhere)
  * complete
* You should be in Overview.
* Click on Connect. 
  * Select Mongodb for VS code extension. (follow the prompts)
  * Enter connection string in extension - mongodb+srv://<user>:<password>@cluster0.8dmyvpo.mongodb.net/

## Creating a new DB for an app
* Go to mongoDb extension in VS code
* Connect to Remote
* Click on + against the cluster heading
  * it will open a js file.
  * Fill the details "DatabaseName"(app name), "CollectionName"(table name) and save it.
  * Run the js file using the play button at top right.
  * Wait for 30 secs, you should see the new DB added under the cluster

# POSTGRESS

* login/ signup at neon.tech
* get the connection string - postgresql://<user>:<password>@ep-misty-resonance-a3lw70in.il-central-1.aws.neon.tech/postgrsTest?sslmode=require 
