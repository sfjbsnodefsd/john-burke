const {} = require("../service/getFieldsService");
const {} = require("../service/PenBankAmountService");

getAllPensioner = async (req, res) => {
  try {
    const people = await getAllpensioner();
    res.json({ data: people, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

getPensionerAllDataById = async (req, res) => {
  //get by id (aadhaar number and do calcualaltions)
  try {
    const person = await getpensionerById(req.params.aadhaar);
    res.json({ data: person, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

showPensionAmountandBankAmount = async (aadhaar, res) => {
  try {
    pension = await returnPensionAmount(aadhaar, res);
    bank = await returnBankServiceCharge(aadhaar, res);
    return res.json({
      pensionAmount: pension,
      bankServiceCharge: bank,
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
    PensionAmount: pension,})
}

returnBankOnly = async (aadhaar, res) => {
  bank = await returnBankServiceCharge(aadhaar, res);
  return res.json({
    BankServiceCharge:  bank,})
}


module.exports = {};
