const express = require("express");
const {getPensionerDetails } = require("../controller/detailsController")
const router = express.Router();


router.get("/getPenDetails", getPensionerDetails );
//router.get("/getname", getPenById );


module.exports = router;
