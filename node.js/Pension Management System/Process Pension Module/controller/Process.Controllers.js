const {
  returnPensionDetailsByAadhaar,
} = require("../service/getDBDataService");

showPensionAmountandBankAmount = async (req, res) => {
  const person = await returnPensionDetailsByAadhaar(req.params.aadhaar); //check for valid aadhaar //req cant befoun
  if (person.aadhaar != req.params.aadhaar) {
    console.log(person);
    res.json({ Message: "Wrong AADHAAR number", person });
  }else
  try {
    pension = await returnPensionAmount(req.params.aadhaar);

    bank = await returnBankServiceCharge(req.params.aadhaar);
  
    {
      await res.json([pension, bank]);
    }
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
    pension = await returnPensionAmount(req.params.aadhaar);
    bank = await returnBankServiceCharge(req.params.aadhaar);

    return await res.json({
      "Pensioner Details": personDetails,
      "Pension Amount": pension,
      "Bank Service Charge": bank,
    });
  } catch (err) {
    console.error(err),
      res.status(500).json({ error: err.message, message: "Invalid number" });
  }
};

module.exports = {};
