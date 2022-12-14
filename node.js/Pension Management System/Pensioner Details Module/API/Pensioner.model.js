const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const detailSchema = new Schema({

  aadhaar:        { type: Number, require: true},
  Name:           {type: String,require: true},
  Date_of_birth:  { type: String, require: true},
  PAN:            { type: String,require: true},
  SalaryEarned:   { type: Number },
  Allowances:     { type: Number, require: true,},
  Self_or_Family_pension: {type: String,require: true, uppercase: true},

  Bank_Name:      { type: String, require: true },
  Bank_Acc_No:    { type: Number, require: true },
  Public_Private_Bank: { type: String, require: true, uppercase: true },

});

module.exports = mongoose.model("PensionerDetail", detailSchema);
