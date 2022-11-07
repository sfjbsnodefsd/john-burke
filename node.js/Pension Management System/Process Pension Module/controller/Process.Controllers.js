const {
  returnPensionDetailsByAadhaar,
} = require("../service/getDBDataService");
const PBankModel = require("../models/PensionBank.model");

showPensionAmountandBankAmount = async (req, res) => {
  const person = await returnPensionDetailsByAadhaar(req.params.aadhaar); //check for valid aadhaar //req cant befoun

  if (person.aadhaar != req.params.aadhaar) {
    
    res.json({ Message: "Wrong AADHAAR number", person });
  }else

  try {
    pension = await returnPensionAmount(req.params.aadhaar);
    bank = await returnBankServiceCharge(req.params.aadhaar);

    // var user =  PBankModel({pension :pension,bank: bank})
    
    // user.save()
    
       res.json([{pension : pension, bank : bank}]);
      


  } catch (err) {
    console.log(err);
    res.status(500).json({ errors: err.message });
  }
};

returnPensionDetailsByAadhaarOnly = async (req, res) => {
  //return both PensionerDETAILS and PENSIONBANKAMOUNT
  try {
    const personDetails = await returnPensionDetailsByAadhaar(
      req.params.aadhaar
    );

    res.json(personDetails); //return pensioner
  } catch (e) {
    console.log(e), res.status(500).json({ error: e.message });
  }
};

returnPensionAlongWithPenDetails = async (req, res) => {
  //return both PensionerDETAILS and PENSIONBANKAMOUNT
  try {
    personDetails = await returnPensionDetailsByAadhaar(req.params.aadhaar);
    pensionAmount = await returnPensionAmount(req.params.aadhaar);
    console.log(pensionAmount)
    Bankfee = await returnBankServiceCharge(req.params.aadhaar);
    
     res.json
    ([{...personDetails, ...pensionAmount, ...Bankfee}]); //merged into one object for front end
  } catch (err) {
    console.error(err),
      res.status(500).json({ error: err.message, message: "Invalid number" });
  }
};

module.exports = {};
