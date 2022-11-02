const PenModel = require("../models/detailsModel");

const findAllDetails = async () => {
  return await PenModel.find({}, { _id: 0, __v: 0 }); //remove id field and version
};

 const findAllDetailsByAadhaar = async (aadhaar,res) => {
 return await PenModel.findOne({ aadhaar},{ _id: 0, __v: 0 },); //remove id field and version

}

// function getUserDocument(req, res, next) {
//   User.findOne({email: req.user.email}, (err, user) => {
//      if (err || !user) {
//          res.status('400').json({status: 'user-missing'});
//      }
//      req.userDocument = user;
//      next();
//   });
// }

module.exports = {findAllDetails,findAllDetailsByAadhaar};
