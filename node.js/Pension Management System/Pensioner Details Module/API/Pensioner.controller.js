const Pensioner = require("./Pensioner.model");


const PensionerByID = async (req, res) => {
  try {
    //get pensioner by aadhaar
    const PensionerID = await Pensioner.findOne({ aadhaar: req.params.aadhaar }, { _id: 0, __v: 0 },);
    //check if exists
    if (!PensionerID) {
      return res.status(404).json({ message: "No Aadhaar ID found..." })
    }
    //return pensioner
    res.json(PensionerID);
  }
  catch (err) {
    res.status(500).json({ error: err, message: "Find AadhaarID failed" })
  }
};



const PensionerList= async (req, res) => {
  try {
    const PensionerList = await Pensioner.find({ }, { _id: 0, __v: 0 },);
    res.json(PensionerList);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};




module.exports = {
  PensionerList,
  PensionerByID

};
