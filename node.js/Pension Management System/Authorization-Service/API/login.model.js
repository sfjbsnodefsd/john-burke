const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator")
const Schema = mongoose.Schema;

const loginSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: { type: String, 
    required: true 
  }

});


loginSchema.plugin(validator) //for checking duplicates


module.exports = mongoose.model("Login", loginSchema);

