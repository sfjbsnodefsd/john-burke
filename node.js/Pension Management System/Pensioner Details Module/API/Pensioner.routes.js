const express = require("express");
const {ImportDetailsFromCSV } = require("./ImportCSVData")
const {PensionerList,PensionerByID, updatePensioner} = require("./Pensioner.controller")

const router = express.Router();


router.post("/importCSV", ImportDetailsFromCSV  );
router.get("/PensionerList",PensionerList  );
router.get("/:aadhaar",PensionerByID );
router.put("/:aadhaar/update", updatePensioner);



module.exports = router;
