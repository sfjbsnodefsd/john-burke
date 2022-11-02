const pensionModel = require("./login.model");


const createUser = async (PenAuthDB) => {
    return await pensionModel.create(PenAuthDB);
  };

  const getAllUsers = async () => {
    return await pensionModel.find().select('-__v'); //hides "version" attribute in mongo
  };

  module.exports ={
    createUser,getAllUsers
  }