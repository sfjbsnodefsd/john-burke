const {
  getpensionerById,
  getAllpensioner,
  findAllowances,
} = require("../service/processService");

getAllPensioner = async (req, res) => {
  try {
    const people = await getAllpensioner();
    res.json({ data: people, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

getPensionerAllById = async (req, res) => {
  //get by id (aadhaar number and do calcualaltions)
  try {
    const person = await getpensionerById(req.params.aadhaar);
    res.json({ data: person, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

getPensionerAllowanceById = async (req, res) => {

  try {
    const person = await getpensionerById(req.params.aadhaar);
    const person1 = await findAllowances(req.params.aadhaar);

    console.log(person1);
    res.json({ data: {person,person1}, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


getPensionerSalaryById = async (req, res) => {
  
  try {
    const salary = await findSalaryEarned(req.params.aadhaar);

    
     salbefore = parseFloat(salary)
     salWithSelfCal =(salbefore*.80) 
     salWithFamCal =(salbefore*.50)
     salAdddedSelf = salbefore+salWithSelfCal
     salAdddedFam  = salbefore+salWithFamCal
   
    const Self_Fam = await findSelfOrFamily(req.params.aadhaar)
    if(Self_Fam =='Self'){
    console.log("this is self pension")
    res.json({SalWithPension:salAdddedSelf, status: "this is self pension"},)
    }
    else if(Self_Fam == 'Family'){
    console.log("this is a family pension")
    res.json({SalWithPension:salAdddedFam,status: "this is a family pension"})
    }
    
    
   // res.json({ data: {salary, salbefore,salWithPEN ,salAddded}, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = {
  getAllPensioner,
  getPensionerAllById,
  getPensionerAllowanceById,
  getPensionerSalaryById
}; //getpensionerById stick in service
