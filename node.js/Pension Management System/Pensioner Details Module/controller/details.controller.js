const {} = require("../service/details.service");

FindAlldetails = async (req, res) => {
  //returns all pensioners in db
  try {
    const people = await findAllDetails();
    res.json({ "Pensioner Details": people });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

FindAlldetailsById = async (req, res) => {
  //returns 1 pensioner with all his data
  //get by id (aadhaar number and do calcualaltions)
  try {
    const person = await findAllDetailsByAadhaar(req.params.aadhaar);
    res.json(person);
  } catch (Error) {
    res
      .status(500)
      .json({
        error: Error.message,
      });
  }
};



module.exports = { FindAlldetails, FindAlldetailsById};
