const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes/details.Routes");
const app = express();



var cors = require('cors') //enabled cors for ports

 
app.use(cors({origin: 'http://localhost:4200'}))
//headers for fronend

// app.use (( req, res, next)  => {
// res.setHeader("Acess-Control-Allow-Origin", "*")
// res.setHeader("Acess-Control-Allow-header","Origin, X-Requested-With, Content-Type, Accept")
// res.setHeader("Access-Control-Allow-Methods",
// "GET, POST, PATCH, DELETE, PUT, OPTIONS")
// next()


// })







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

app.listen(5001, () => {
  console.log("Server is up and running on PORT 5001");
});
