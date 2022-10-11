const createPensioner = require("../service/login-service");
const PensionModel = require("../model/login-Model");

module.exports = RegisterPensioner = async (req, res) => {
  const { email, password, aadhaar } = req.body;

  const userExists = await PensionModel.findOne({ aadhaar });
  if (userExists) {
    return res.json({
      success: 0,
      message: "user already exists",
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
