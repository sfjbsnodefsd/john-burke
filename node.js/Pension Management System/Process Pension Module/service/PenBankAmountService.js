const {} = require("./getFieldsService");

returnPensionAmount = async (req,res) => {
  const salarybefore = await findSalaryEarned(req.params.aadhaar);
  const Self_Fam = await findSelfOrFamily(req.params.aadhaar);
  const allowance = await findAllowances(req.params.aadhaar);

  if (Self_Fam == "SELF") {
    salSelfAmount = salarybefore * 0.8;
    newAmount = (salSelfAmount + allowance).toFixed(2);
    return newAmount;
  } else if (Self_Fam == "FAMILY") {
    salFamAmount = (salarybefore * 0.5).toFixed(2);
    return salFamAmount;
  }
};

returnBankServiceCharge = async (req, res) => {
  const publicPrivate = await getPublicOrPrivateBank(req.params.aadhaar);

  if (publicPrivate == "PUBLIC") {
    return (BankCharge = 500);
  } else if (publicPrivate == "PRIVATE") {
    return (BankCharge = 550);
  }
};

module.exports = {};
