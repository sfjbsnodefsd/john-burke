const express = require("express");
const {ImportDetailsFromCSV } = require("../controller/ImportCSV.controller")
const {FindAlldetails,findAllDetailsByAadhaarOnly ,findAllDetailsByAadhaar} = require("../controller/details.controller")

const router = express.Router();


router.post("/importCSV", ImportDetailsFromCSV  );
router.get("/findAll",FindAlldetails  );
router.get("/:aadhaar",findAllDetailsByAadhaarOnly );



module.exports = router;
