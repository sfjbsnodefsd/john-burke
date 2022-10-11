const mongoose = require("mongoose")
const Schema = mongoose.Schema

const LoginSchema = new Schema ({
    aadhaar:Number,
    email:String,
    password:String,

    created_at: {
        type:Date,
        default:Date.now()
    }
})

module.exports = PensionModel = mongoose.model("Login", LoginSchema)