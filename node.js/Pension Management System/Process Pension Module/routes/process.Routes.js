const express = require("express");
const {} = require("../controller/Process.Controllers.js");
const {
    
  } = require("../service/getDBDataService");


const router = express.Router();

 router.get("/:aadhaar",returnPensionDetailsByAadhaarOnly)
router.get("/:aadhaar/bothDetails", returnPensionAlongWithPenDetails)
router.post("/:aadhaar/both",showPensionAmountandBankAmount)



module.exports = router;

