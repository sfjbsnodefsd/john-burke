const express = require("express");
const {getPensionerDetails,getPenById } = require("../controller/detailsController")
const router = express.Router();


router.get("/read", getPensionerDetails );
router.get("/getname", getPenById );


module.exports = router;
