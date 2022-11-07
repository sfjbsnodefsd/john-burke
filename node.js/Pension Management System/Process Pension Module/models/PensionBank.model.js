const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pensionSchema = new Schema({
  pension: {
    type: Number,
    unique: true,
    index: true
  },
  bank: {
    type: Number,
    unique: true,
    index: true
  }
})
module.exports = PBankModel = mongoose.model("CalPensionBank", pensionSchema);
