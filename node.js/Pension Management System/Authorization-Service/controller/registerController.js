const {
  createPensioner,
  getAllPensioner,
} = require("../service/login-service");
const PensionModel = require("../model/login-Model");

const RegisterPensioner = async (req, res) => {
  const { aadhaar, email, password } = req.body;

  if (!(aadhaar && email && password)) {
    res.status(400).send("All input is required");
  }

  const userExists = await PensionModel.findOne({ aadhaar }); //see if aadhaar number is the same
  if (!userExists) {
    return res.json({ message: "Pensioner already exists" });
  }
  try {
    const pensioner = await createPensioner(req.body);
    res.json({ data: pensioner, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


















//get all pensioners
const getAllpensioner = async (req, res) => {
  try {
    const employees = await getAllPensioner();
    res.json({ data: employees, status: "success" });
  } catch (err) {
    res
      .status(500)
      .json({ error: err.message, message: "Cant get all pensioners" });
  }
};

module.exports = { getAllpensioner, RegisterPensioner };
