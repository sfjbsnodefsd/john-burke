const pensionModel = require("../model/login-Model");


module.exports = createPensioner = async (PenAuthDB) => {
    return await pensionModel.create(PenAuthDB);
  };