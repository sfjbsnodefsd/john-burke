const express = require("express");
const mongoose = require("mongoose");
//const jwt = require("jsonwebtoken");

const Router = require("./routes/penRoutes");
const app = express();


//middleware
app.use(express.json());
app.use(Router);

mongoose.connect(
  "mongodb://localhost:27017/PenAuthDB",
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
app.listen(5000, () => {
  console.log(`AUTH SERVICE AT 5000`);
});


