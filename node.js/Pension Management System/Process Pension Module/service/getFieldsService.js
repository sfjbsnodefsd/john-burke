const ProcessModel = require("../models/processModel");

//.distint returns value from array only without field name
getpensionerById = async (aadhaar) => {
  return await ProcessModel.findOne({ aadhaar });
};

findSalaryEarned = async (aadhaar) => {
  const salary = await ProcessModel.findOne({ aadhaar }).distinct(
    "SalaryEarned"
  );

  return Number(salary);
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

getAllpensioner = async () => {
  return await ProcessModel.find();
};

getPublicOrPrivateBank = async (aadhaar) => {
  const publicPrivate = await ProcessModel.findOne({ aadhaar }).distinct(
    "Public_Private_Bank"
  );
  return publicPrivate.toString().toUpperCase();
};

module.exports = {};
