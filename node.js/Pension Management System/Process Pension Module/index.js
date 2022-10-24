const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes/process.Routes");
const app = express();

app.use(express.json());
app.use(Router);

mongoose
  .connect("mongodb://localhost:27017/PenAuthDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to database");
  })
  .catch((error) => {
    console.log("database connection failed. exiting now...");
    console.error(error);
    process.exit(1);
  });

app.listen(5002, () => {
  console.log("Server is up and running on PORT 5002");
});
