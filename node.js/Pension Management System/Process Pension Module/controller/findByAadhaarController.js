const {} = require("../service/getDBDataService");
const ProcessModel = require("../models/processModel");
const {returnBankServiceCharge,returnPensionAmount} = require("./returnPenBankAmountController.js");

getAllPensioner = async (req, res) => {
  //returns all pensioners in db
  try {
    const people = await getAllpensioner();
    res.json({ "Pensioner": people, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

getPensionerAllDataById = async (req, res) => {
  //returns 1 pensioner with all his data
  //get by id (aadhaar number and do calcualaltions)
  try {
    const person = await getpensionerById(req.params.aadhaar);
    res.json({ "Pensioner": person, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

showPensionAmountandBankAmount = async (req, res) => {
  //returns PensionAmount and BankCharge
  try {
    //if(!req.params.aadhaar){return res.json({data: "failed"})}
    // const exists = await ProcessModel.findOne(req.params.aadhaar);
    // if (!exists){return res.json({data: "failed"})}
    // console.log(req.params.aadhaar)
    pension = await returnPensionAmount(req.params.aadhaar);
    bank = await returnBankServiceCharge(req.params.aadhaar);
    
    return res.json({
      "Pension Amount": pension,
      "Bank Service Charge": bank,
    });
  } catch (err) {
    {
      res.status(500).json({ error: err.message });
    }
  }
};

returnSalaryOnly = async (aadhaar, res) => {
  pension = await returnPensionAmount(aadhaar, res);
  return res.json({
    PensionAmount: pension,
  });
};

returnBankOnly = async (aadhaar, res) => {
  bank = await returnBankServiceCharge(aadhaar, res);
  return res.json({
    BankServiceCharge: bank,
  });
};

returnPensionAlongWithPenDetails = async (req, res) => {
  //return both PensionerDETAILS and PENSIONBANKAMOUNT
  try {
    personDetails = await getpensionerById(req.params.aadhaar);
    pension = await returnPensionAmount(req.params.aadhaar);
    bank = await returnBankServiceCharge(req.params.aadhaar);

    return res.json({
      "Pensioner Details": personDetails,
      "Pension Amount": pension,
      "Bank Service Charge": bank,
    });
  } catch (err) {
    {
      console.log(err);
      res.status(500).json({ error: err.message });
    }
  }
};

module.exports = {};
