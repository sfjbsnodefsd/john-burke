const mongoose = require("mongoose")
const Schema = mongoose.Schema

const LoginSchema = new Schema ({
    aadhaar:Number,
    email:String,
    password:String,


})

module.exports = PensionModel = mongoose.model("Login", LoginSchema)