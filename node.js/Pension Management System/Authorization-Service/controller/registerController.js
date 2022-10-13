const {
  createPensioner,
  getAllPensioner,
} = require("../service/login-service");
const PensionModel = require("../model/login-Model");

const RegisterPensioner = async (req, res) => {
  const { aadhaar } = req.body;

  const userExists = await PensionModel.findOne({ aadhaar }); //see if aadhaar number is the same
  if (userExists) {
    return res.json({
      success: 0,
      message: "Pensioner already exists",
    });
  } else {
    try {
      const pensioner = await createPensioner(req.body);
      res.json({ data: pensioner, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
    // PensionModel.save();
    //   return res.json(PensionModel);
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
