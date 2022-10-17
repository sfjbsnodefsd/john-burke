const {} = require("../service/getDBDataService");

returnPensionAmount = async (aadhaar, res) => {
  const salarybefore = await findSalaryEarned(aadhaar);
  const Self_Fam = await findSelfOrFamily(aadhaar);
  const allowance = await findAllowances(aadhaar);

  if (Self_Fam == "SELF") {
    salSelfAmount = salarybefore * 0.8;
    newAmount = (salSelfAmount + allowance).toFixed(2); //toFixed rounds number to 2 decimal places
    return newAmount;
  } else if (Self_Fam == "FAMILY") {
    salFamAmount = salarybefore * 0.5;
    newAmount = (salFamAmount + allowance).toFixed(2);
    return salFamAmount;
  }
};

returnBankServiceCharge = async (aadhaar, res) => {
  const publicPrivate = await getPublicOrPrivateBank(aadhaar);

  if (publicPrivate == "PUBLIC") {
    return (BankCharge = 500);
  } else if (publicPrivate == "PRIVATE") {
    return (BankCharge = 550);
  }
};

module.exports = {returnBankServiceCharge,returnPensionAmount};
