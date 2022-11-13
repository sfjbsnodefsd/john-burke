const express = require("express");
const {ImportDetailsFromCSV } = require("./ImportCSVData")
const {PensionerList,PensionerByID } = require("./Pensioner.controller")

const router = express.Router();


router.post("/importCSV", ImportDetailsFromCSV  );
router.get("/PensionerList",PensionerList  );
router.get("/:aadhaar",PensionerByID );



module.exports = router;
