// const filepath = "./person.csv";
const filepath = "./PersonDetails.csv";
const PenModel = require("../models/detailsModel");
const csv = require("csv-parser");

const fs = require("fs");
const results = []; //holds csv content

const ImportDetailsFromCSV = async (req, res) => {
  fs.createReadStream(filepath)
    .on("error", () => {
      res.status(500).json({ error: err.message });
    })

    .pipe(csv())
    .on("data", (data) => console.log("uploading")) //get name (data.Name))
    .on("end", (data) => {
      results.push(data)
      PenModel.find({}, (err, docs) => {
        //get db json
        if (docs.length == 0) {
          //if json is empty insert csv file into db
          console.log("Data inserted");
          return PenModel.insertMany(results).then(() => {
             res.json({
              message: "Data inserted ",
              "Data Inserted" :results
            });
          });

          // .then(() => {
          //   console.log("Data inserted");
          //     // Success
          //   });
        } else {
          console.log("Data already entered");
          return res.status(500).json({ message: "Data already inserted",results });

          // Failure
        }
      });
    });
};

module.exports = { ImportDetailsFromCSV };
