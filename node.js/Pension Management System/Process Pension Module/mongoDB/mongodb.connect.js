const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb://127.0.0.1:27017/PenAuthDB",
      { useNewUrlParser: true },
      console.log("Connected to MongoDB")
      
    );
  } catch (err) {
    console.error("Error connecting to mongodb");
    console.error(err);
  }
}

module.exports = { connect };