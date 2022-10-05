const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  EmpID: {
    type: Number,
    required: true,
  },
  EmpName: {
    type: String,
    required: true,
  },
  EmpSalary: {
    type: Number,
    required: true,
  },
  EmpDesignation: {
    type: String,
    required: true,
  },
  EmpEmail: {
    type: String,
    required: true,
  },
  EmpQualification: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Employee", employeeSchema);
