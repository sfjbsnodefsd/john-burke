const express = require("express");
const {ImportDetailsFromCSV } = require("../controller/ImportCSV.controller")
const {FindAlldetails,FindAlldetailsById} = require("../controller/details.controller")

const router = express.Router();


router.post("/importCSV", ImportDetailsFromCSV  );
router.get("/findAll",FindAlldetails  );
router.get("/:aadhaar",FindAlldetailsById);



module.exports = router;
