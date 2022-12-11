const express = require("express");
const mongodb = require("./mongoDB/mongodb.connect")
const Router = require("./API/login.routes");
const app = express();

mongodb.connect(); //connect to db

var cors = require('cors') //enabled cors for ports
app.use(cors({origin: 'http://localhost:4200'}))


//middleware
app.use(express.json());
app.use(Router);


module.exports = app;
