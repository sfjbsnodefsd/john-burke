const express = require("express");
const { MemberDetails_Pension } = require("./Process.controller")

const router = express.Router();


router.get("/:aadhaar/Details_Pension",  MemberDetails_Pension)




module.exports = router;

