const ProcessModel = require("../models/processModel");

getAllpensioner = async () => {
  return await ProcessModel.find({}, { _id: 0 ,__v:0}); //remove id field and version
};

getpensionerById = async (aadhaar) => {
  return await ProcessModel.findOne({ aadhaar },{ _id: 0 ,__v:0});//remove id field and version
};

findSalaryEarned = async (aadhaar) => {
  const salary = await ProcessModel.findOne({ aadhaar }).distinct(  //.distinct returns value without fieldname in an array
    "SalaryEarned"
  );

  return Number(salary); //returns salary as a workable number format
};

findSelfOrFamily = async (aadhaar) => {
  const SelfOrFam = await ProcessModel.findOne({ aadhaar }).distinct(
    "Self_or_Family_pension"
  );
  return SelfOrFam.toString().toUpperCase();
};

findAllowances = async (aadhaar) => {
  const allowance = await ProcessModel.findOne({ aadhaar }).distinct(
    "Allowances"
  ); //gets specfic allwances on aadhaar number
  return Number(allowance);
};



getPublicOrPrivateBank = async (aadhaar) => {
  const publicPrivate = await ProcessModel.findOne({ aadhaar }).distinct(
    "Public_Private_Bank"
  );
  return publicPrivate.toString().toUpperCase();
};

module.exports = {};
