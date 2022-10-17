const express = require("express");
const {ImportDetailsFromCSV  } = require("../controller/detailsController")
const router = express.Router();


router.get("/getPenDetails", ImportDetailsFromCSV  );



module.exports = router;
