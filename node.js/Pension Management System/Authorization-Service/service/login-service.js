const pensionModel = require("../model/login-Model");


const createPensioner = async (PenAuthDB) => {
    return await pensionModel.create(PenAuthDB);
  };

  const getAllPensioner = async () => {
    return await pensionModel.find().select('-__v'); //hides "version" attribute in mongo
  };

  module.exports ={
    createPensioner, getAllPensioner
  }