const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes/employeeRoutes");
const app = express();

//middleware
app.use(express.json());
app.use(Router);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

mongoose.connect(
  "mongodb://localhost:27017/employeeDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

module.exports = app;
