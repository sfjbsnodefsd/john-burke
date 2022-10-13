// const filepath = "./person.csv";
const filepath = "./PersonDetails.csv";
const csv = require("csv-parser");

const fs = require("fs");
const results = [];

const getPensionerDetails = async (req, res) => {
  fs.createReadStream(filepath)
    .on("error", () => { res.status(500).json({ error: err.message });})

    .pipe(csv())
    .on("data", (data) => results.push(data)) //get name (data.Name)) 
    .on("end", () => {
      res.json(results);
    });

};
const getPenById = async (req, res) => {

    const resultss = [];
    fs.createReadStream(filepath)
    .on("error", () => { res.status(500).json({ error: err.message });})

    .pipe(csv())
    .on("headers", (data) => resultss.push(data.Name)) //get name (data.Name)) 
    .on("end", () => {
      res.json(resultss);
    });

};
// exports.getemployeeById = async (req, res) => {
//   try {
//     const employee = await getEmployeeById(req.params.id);
//     res.json({ data: employee, status: "success" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


module.exports = { getPensionerDetails,getPenById };
