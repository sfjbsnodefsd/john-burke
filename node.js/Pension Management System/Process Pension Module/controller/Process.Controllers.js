const {} = require("../service/getDBDataService");
//const {returnBankServiceCharge,returnPensionAmount, returnPensionDetailsByAadhaar} = require("./returnPenBankAmountController.js");

showPensionAmountandBankAmount = async (req, res) => {
  //returns PensionAmount and BankCharge
  try {

    pension = await returnPensionAmount(req.params.aadhaar);
    bank = await returnBankServiceCharge(req.params.aadhaar);
   // if(pension==null) throw new Error("Invalid Aadhaar number")
    {
      return await res.json({
        "Pension Amount": pension,
        "Bank Service Charge": bank,
      });
    }
  } catch (err) {
    res
      .status(500)
      .json({ errors: err.message, message:"Invalid number"});
  }
};

returnPensionDetailsByAadhaarOnly = async (req, res) => {
  //return both PensionerDETAILS and PENSIONBANKAMOUNT
  try {
    personDetails = await returnPensionDetailsByAadhaar(req.params.aadhaar);
//console.log(personDetails)
    return res.json({
      "Pensioner Details": personDetails,
    });
  } catch (e) {
    res
      .status(500)
      .json({ error: e.message,message:"Invalid number"});
  }
};

returnPensionAlongWithPenDetails = async (req, res) => {
  //return both PensionerDETAILS and PENSIONBANKAMOUNT
  try {
    personDetails = await returnPensionDetailsByAadhaar(req.params.aadhaar);
    pension = await returnPensionAmount(req.params.aadhaar);
    bank = await returnBankServiceCharge(req.params.aadhaar);

    return await res.json({
      "Pensioner Details": personDetails,
      "Pension Amount": pension,
      "Bank Service Charge": bank,
    });
  } catch (err) {
    console.error(err),
    res
      .status(500)
      .json({  error: err.message,message:"Invalid number"});
  }
};




module.exports = {};
