const express = require("express");
const {} = require("../controller/Process.Controllers.js");


const router = express.Router();

 router.patch("/:aadhaar",returnPensionDetailsByAadhaarOnly)
router.get("/:aadhaar/bothDetails", returnPensionAlongWithPenDetails)
router.post("/:aadhaar/both",showPensionAmountandBankAmount)


module.exports = router;

