const {
  findAllDetails,
  findAllDetailsByAadhaar,
} = require("../service/details.service");

const FindAlldetails = async (req, res) => {
  //returns all pensioners in db
  try {
    const people = await findAllDetails();
    if (!people) {
      return res.status(404).json({ Message: "Database is empty" });
    }
    res.json( people );
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const findAllDetailsByAadhaarOnly = async (req, res) => {
  findAllDetailsByAadhaar(req.params.aadhaar)
    .then((person) => {
      if (!person) {
        return res.json({ Failed: "Person = NUll, Wrong AADHAAR" });
      }
      res.json( person);
    })
    .catch((e) => {
      console.log(e), res.status(500).json({ error: e.message });
    });
};

module.exports = {
  FindAlldetails,
  findAllDetailsByAadhaarOnly
 
};
