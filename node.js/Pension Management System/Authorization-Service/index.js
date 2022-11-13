const express = require("express");
const mongoose = require("mongoose");


const Router = require("./API/login.routes");
const app = express();


var cors = require('cors') //enabled cors for ports
app.use(cors({origin: 'http://localhost:4200'}))


//middleware
app.use(express.json());
app.use(Router);

mongoose.connect(
  "mongodb://127.0.0.1:27017/PenAuthDB",
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


