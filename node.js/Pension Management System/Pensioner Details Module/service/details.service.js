const PenModel = require("../models/detailsModel");

const findAllDetails = async () => {
  return await PenModel.find({}, { _id: 0, __v: 0 }); //remove id field and version
};

 const findAllDetailsByAadhaar = async (aadhaar,res) => {

 return await PenModel.findOne({ aadhaar },{ _id: 0, __v: 0 },); //remove id field and version

}

module.exports = {findAllDetails,findAllDetailsByAadhaar};
