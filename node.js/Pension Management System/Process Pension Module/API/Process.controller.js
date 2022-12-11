const { PensionerByID, CalculatePension, CalculateBankFee } = require("./Process.service");
const database = require("./Process.model")


///////Only Pension + Bank fee//////////////////
const PensionAmount = async (req, res) => {
  try {
    personDetails = await PensionerByID(req.params.aadhaar);
    pension = await CalculatePension(req.params.aadhaar);
    bank = await CalculateBankFee (req.params.aadhaar);

     res.json([{...pension, ...bank}]);
      
  } catch (err) {
    console.log(err);
    res.status(500).json({ errors: err.message });
  }
};

//////Details + Pension + Bank Fee///////////////
const MemberDetails_Pension = async (req, res) => {

  try {
    personDetails = await PensionerByID(req.params.aadhaar);
    pensionAmount = await CalculatePension(req.params.aadhaar);
    Bankfee = await CalculateBankFee(req.params.aadhaar);

    if(!pensionAmount){
      return res.status(404).json([{...personDetails, ...pensionAmount, ...Bankfee}])
    }

    let user = database({...personDetails, ...pensionAmount, ...Bankfee} )
    user.save((err)=> {
    });

     res.json([{...personDetails, ...pensionAmount, ...Bankfee}]); //merged into one object for frontend

  } catch (err) {
    
      res.status(500).json({ error: err.message });
  }
};


module.exports = {PensionAmount, MemberDetails_Pension};
