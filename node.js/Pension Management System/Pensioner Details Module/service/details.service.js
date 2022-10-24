const PenModel = require("../models/detailsModel");

findAllDetails = async () => {
  return await PenModel.find({}, { _id: 0, __v: 0 }); //remove id field and version
};

findAllDetailsByAadhaar = async (aadhaar,res) => {
 try{
  return  await PenModel.findOne({ aadhaar },{ _id: 0, __v: 0 },); //remove id field and version

} catch (RangeError) {
  console.log(RangeError.message)
}

};
module.exports = {};
