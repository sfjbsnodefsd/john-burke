const express = require("express");
const {

  getemployeeById,
  getAllemployees

} = require("../controller/processController");

const router = express.Router();


router.get("/:aadhaar", getemployeeById);
router.get("/", getAllemployees);


module.exports = router;
