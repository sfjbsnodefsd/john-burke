const PenModel = require("./Pensioner.model");
const csvFilePath = "./20PersonDetailslist.csv";
const csv = require("csvtojson");

const ImportDetailsFromCSV = async (req, res) => {
  csv()
    .fromFile(csvFilePath)
    .then((csvData) => { //import csv
      PenModel.find({}, (err, DBcontent) => { 
        if (DBcontent.length == 0) {
          //if json is empty insert csv file into db
         
          return PenModel.insertMany(csvData).then(() => {
            res.json({
              message: "Data inserted ",
              "Data Inserted": csvData,
            });
          });
        } else {
          
          return res
            
            .json({ message: "Data already inserted", csvData });
        }
      });
    });
};

module.exports = { ImportDetailsFromCSV };
