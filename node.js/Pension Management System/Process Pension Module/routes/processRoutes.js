const express = require("express");
const {} = require("../controller/FindByAadhaarController");
const{} = require("../service/PenBankAmountService")

const router = express.Router();

router.get("/:aadhaar", getPensionerAllDataById);
router.get("/", getAllPensioner);
router.get("/:aadhaar/sal",returnSalaryOnly)
router.get("/:aadhaar/bank",returnBankOnly ) 
router.get("/:aadhaar/both",showPensionAmountandBankAmount)


module.exports = router;
