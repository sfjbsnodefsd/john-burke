const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("mongoose-unique-validator")

const PensionSchema = new Schema({

  aadhaar:        { type: Number, require: true,index:{unique:true}},
  Name:           {type: String,require: true},
  Date_of_birth:  { type: String, require: true},
  PAN:            { type: String,require: true},
  SalaryEarned:   { type: Number },
  Allowances:     { type: Number, require: true,},
  Self_or_Family_pension: {type: String,require: true, uppercase: true},

  Bank_Name:      { type: String, require: true },
  Bank_Acc_No:    { type: Number, require: true },
  Public_Private_Bank: { type: String, require: true, uppercase: true },


  pensionAmount:  { type: Number, require: true },
  Bankfee : { type: String, require: true }
});


try{
PensionSchema .plugin(validator) //for checking duplicates
}catch(err){
    console.log("Duplicate")
}

module.exports = mongoose.model("PensionQuotes", PensionSchema);
