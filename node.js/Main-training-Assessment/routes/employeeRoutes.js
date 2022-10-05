const express = require("express");
const {
  getAllemployees,
  createemployee,
  getemployeeById,
  updateemployee,
  deleteemployee,
} = require("../controller/employeeController");

const router = express.Router();

router.post("/", createemployee);
router.get("/", getAllemployees);
router.get("/:id", getemployeeById);
router.patch("/", updateemployee);
router.delete("/", deleteemployee);

module.exports = router;
