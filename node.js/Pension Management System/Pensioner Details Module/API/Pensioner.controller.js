const Pensioner = require("./Pensioner.model");

const PensionerByID = async (req, res) => {
  try {
    //get pensioner by aadhaar
    const PensionerID = await Pensioner.findOne(
      { aadhaar: req.params.aadhaar },
      { _id: 0, __v: 0 }
    );
    //check if exists
    if (!PensionerID) {
      return res.status(404).json({ message: "No Aadhaar ID found..." });
    }
    //return pensioner
    res.json(PensionerID);
  } catch (err) {
    res.status(500).json({ error: err, message: "Find AadhaarID failed" });
  }
};

const PensionerList = async (req, res) => {
  try {
    const PensionerList = await Pensioner.find({}, { _id: 0, __v: 0 });
    res.json(PensionerList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updatePensioner = async (req, res) => {
  //works
  try {
    const aadhar = req.params.aadhaar;
    const pensionerResponse = req.body;

    const PensionerUpdated = await Pensioner.updateMany(
      { aadhaar: aadhar },
      pensionerResponse,
      { returnOriginal: false }
    );

    if (PensionerUpdated.modifiedCount == 0) {
      return res.status(400).json({ message: "No changes found..." });
    }

    res.status(200).json({ UpdatedCount: PensionerUpdated.modifiedCount });
    
  } catch (err) {
    res.status(500).json({ error: err.message, message: "error" });
  }
};

module.exports = {
  PensionerList,
  PensionerByID,
  updatePensioner,
};
