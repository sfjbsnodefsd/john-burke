const employeeModel = require("../models/employee");

exports.getAllEmployees = async () => {
  return await employeeModel.find();
};

exports.createEmployee = async (employeeDB) => {
  return await employeeModel.create(employeeDB);
};
exports.getEmployeeById = async (id) => {
  return await employeeModel.findById(id);
};

exports.updateEmployee = async (id, employeeDB) => {
  return await employeeModel.findOneAndUpdate(id, employeeDB);
};

exports.deleteEmployee = async () => {
  return await employeeModel.findOneAndDelete();
};
