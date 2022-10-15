const ProcessModel = require("../models/processModel");

getpensionerById = async (aadhaar) => {
  return await ProcessModel.findOne({ aadhaar });
}; 

// "SalaryEarned -_id"
findSalaryEarned = async (aadhaar) => {
    return await ProcessModel.find({aadhaar}).distinct('SalaryEarned'); //distinct returns value only from an array
    //.distinct( "SalaryEarned -_id", )
}
findSelfOrFamily= async (aadhaar) => {
   sals = await ProcessModel.find({aadhaar}).distinct('Self_or_Family_pension');
   return sals //take controller stuff and stick in here
   
}

findAllowances = async (aadhaar) => {
  return await ProcessModel.findOneAndUpdate({ aadhaar }).select("Allowances -_id"); //gets specfic allwances on aadhaar number
};
getAllpensioner = async () => {
  return await ProcessModel.find();
};

module.exports = { getAllpensioner, findAllowances, getpensionerById, findSalaryEarned,findSelfOrFamily};
