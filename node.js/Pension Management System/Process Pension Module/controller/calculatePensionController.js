const { getPensionerById, getpensionerById } = require("./findByAadhaarController");


// getPensionerById ()


// const calculatePension = async (req, res) => {
//     try {
    
//       const person = await getpensionerById( req.body);
//       res.json({ data: person, status: "success" });
//       console.log(person.Allowances)
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   };

//   module.exports = { calculatePension}