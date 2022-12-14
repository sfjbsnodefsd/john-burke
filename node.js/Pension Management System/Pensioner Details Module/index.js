const express = require("express");
const Router = require("./API/Pensioner.routes");
const app = express();
app.disable("x-powered-by"); //secuirty


let cors = require('cors') //enabled cors for ports
app.use(cors({ origin: 'http://localhost:4200' }))


app.use(express.json());
app.use(Router);


module.exports = app;