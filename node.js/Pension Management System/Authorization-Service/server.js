const app = require("./app");
const mongodb = require("./mongoDB/mongodb.connect")


mongodb.connect(); //connect to db

app.listen(5000, () => {
  console.log(`AUTH SERVICE AT 5000`);
});
