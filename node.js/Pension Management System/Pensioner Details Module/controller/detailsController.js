const PenModel = require("../models/detailsModel");
const csvFilePath = "./PersonDetails.csv";
const csv = require("csvtojson");

const ImportDetailsFromCSV = async (req, res) => {
  csv()
    .fromFile(csvFilePath)
    .then((csvData) => { //import csv
      PenModel.find({}, (err, DBcontent) => { 
        if (DBcontent.length == 0) {
          //if json is empty insert csv file into db
          console.log("Data inserted");
          return PenModel.insertMany(csvData).then(() => {
            res.json({
              message: "Data inserted ",
              "Data Inserted": csvData,
            });
          });
        } else {
          console.log("Data already entered");
          return res
            .status(500)
            .json({ message: "Data already inserted", csvData });
        }
      });
    });
};

module.exports = { ImportDetailsFromCSV };
