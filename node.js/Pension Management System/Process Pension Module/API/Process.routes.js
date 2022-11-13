const express = require("express");
const { PensionAmount, MemberDetails_Pension } = require("./Process.controller")

const router = express.Router();
const checkToken = require("../Auth/Auth.verifyToken")


router.get("/:aadhaar/Details_Pension", checkToken, MemberDetails_Pension)
router.get("/:aadhaar/pension", PensionAmount)



module.exports = router;

