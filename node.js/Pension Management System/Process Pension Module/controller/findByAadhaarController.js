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

getPensionerSalaryById = async (req, res) => {
  const salarybefore = await findSalaryEarned(req.params.aadhaar);
  const Self_Fam = await findSelfOrFamily(req.params.aadhaar);
  const allowance = await findAllowances(req.params.aadhaar);

  if (Self_Fam == "SELF") {
    salSelfAmount = salarybefore * 0.8;
    newAmount = (salSelfAmount + allowance).toFixed(2);
    //salSelfAmount = (salSelfAmount + allowance)
    res.json({
      PensionAmount: { salSelfAmount, newAmount },
      status: "this is self pension",
    });
  } else if (Self_Fam == "FAMILY") {
    salFamAmount = (salarybefore * 0.5).toFixed(2);

    res.json({
      PensionAmount: salFamAmount,
      status: "this is a family pension",
    });
  } else {
    console.log("Invalid Pension Plan");
    res.json({
      status: "Error no self or fam pension detected",
    });
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
