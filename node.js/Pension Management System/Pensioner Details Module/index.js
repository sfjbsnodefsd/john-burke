const express = require("express");
const mongoose = require("mongoose");
const Router = require("./API/Pensioner.routes");
const app = express();



var cors = require('cors') //enabled cors for ports
app.use(cors({origin: 'http://localhost:4200'}))


app.use(express.json());
app.use(Router);

mongoose
  .connect("mongodb://127.0.0.1:27017/PenAuthDB", {
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

app.listen(5001, () => {
  console.log("Server is up and running on PORT 5001");
});
