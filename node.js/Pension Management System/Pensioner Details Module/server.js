const app = require("./index")
const mongodb = require("./mongoDB/mongodb.connect")


mongodb.connect(); //connect to db

app.listen(5001, () => {
    console.log("Server is up and running on PORT 5001");
  });