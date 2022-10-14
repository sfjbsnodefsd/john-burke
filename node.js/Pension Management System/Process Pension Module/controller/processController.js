const mongoose = require("mongoose");
const ProcessModel = require("../models/processModel");
var allpeople =ProcessModel.find();
console.log(allpeople.aadhaar)
getPensioerById = async (aadhaar) => {
  return await ProcessModel.findOne( {aadhaar});
};
getAllEmployees = async () => {
  return await ProcessModel.find();
};

//634958dd279db4e72753e1f9

getemployeeById = async (req, res) => {
  
  try {
    const employee = await getPensioerById(req.params.aadhaar);
    res.json({ data: employee, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

 getAllemployees = async (req, res) => {
  try {
    const employees = await getAllEmployees();
    console.log(employees )
    res.json({ data: employees, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {getAllemployees,getemployeeById}