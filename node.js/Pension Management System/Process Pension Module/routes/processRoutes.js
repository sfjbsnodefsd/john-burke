const express = require("express");
const {
  getAllPensioner,
  getPensionerAllById,
  getPensionerAllowanceById,
  getPensionerSalaryById
} = require("../controller/findByAadhaarController");

const router = express.Router();

router.get("/:aadhaar", getPensionerAllById);

router.get("/", getAllPensioner);
router.get("/:aadhaar/allow",getPensionerAllowanceById) 
router.get("/:aadhaar/sal",getPensionerSalaryById) 



module.exports = router;
