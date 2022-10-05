const {
  getAllEmployees,
  createEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} = require("../Service/employeeService");

exports.getAllemployees = async (req, res) => {
  try {
    const employees = await getAllEmployees();
    res.json({ data: employees, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createemployee = async (req, res) => {
  try {
    const employee = await createEmployee(req.body);
    res.json({ data: employee, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getemployeeById = async (req, res) => {
  try {
    const employee = await getEmployeeById(req.params.id);
    res.json({ data: employee, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateemployee = async (req, res) => {
  try {
    const employee = await updateEmployee(req.params.id, req.body);
    res.json({ data: employee, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteemployee = async (req, res) => {
  try {
    const employee = await deleteEmployee(req.params.id);
    res.json({ data: employee, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
