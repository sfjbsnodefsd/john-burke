// const filepath = "./person.csv";
const filepath = "./PersonDetails.csv";
const PenModel = require("../models/detailsModel");
const csv = require("csv-parser");

const fs = require("fs");
const results = []; //holds csv content

const getPensionerDetails = async (req, res) => {
  fs.createReadStream(filepath)
    .on("error", () => {
      res.status(500).json({ error: err.message });
    })

    .pipe(csv())
    .on("data", (data) => results.push(data)) //get name (data.Name))
    .on("end", (data) => {
      PenModel.find({}, (err, docs) => {
        //get db json
        if (docs.length == 0) {
          //if json is empty insert csv file into db
          PenModel.insertMany(results).then(() => {
            console.log("Data inserted");
            // Success
          });
        } else {
          console.log("Data already entered");
          res.status(500).json({ results})
          
           // Failure
        }
      });
    });
};

module.exports = { getPensionerDetails };
