const express = require("express");
const { PensionAmount, MemberDetails_Pension } = require("./Process.controller")

const router = express.Router();
const checkToken = require("../Auth/Auth.verifyToken")

// checkToken,
router.get("/:aadhaar/Details_Pension",  MemberDetails_Pension)
router.get("/:aadhaar/pension",  PensionAmount)



module.exports = router;

