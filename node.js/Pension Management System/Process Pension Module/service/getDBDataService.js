const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));  //import fetch module


///////////////Pensioner Details/////////////////////
returnPensionDetailsByAadhaar = async (aadhaarNum, res) => {
  //return using fetch, getting details from pension details
 
    const response = await fetch(`http://localhost:5001/${aadhaarNum}`); //5001 server is fro pensionDetails
    const data = await response.json();
    return data
  
};

/////////////PENSION AMOUNT///////////////////////////////

returnPensionAmount = async (aadhaar, res) => {

  const personDetails = await returnPensionDetailsByAadhaar(aadhaar)

  const salarybefore = personDetails.SalaryEarned;
  const Self_Fam = personDetails.Self_or_Family_pension;
  const allowance = personDetails.Allowances;
  
  if (Self_Fam == "SELF") {
    salSelfAmount = salarybefore * 0.8;
    newAmount = (salSelfAmount + allowance).toFixed(2); //toFixed rounds number to 2 decimal places
    return await newAmount;
  } else if (Self_Fam == "FAMILY") {
    salFamAmount = salarybefore * 0.5;
    newAmount = (salFamAmount + allowance).toFixed(2);
    return await newAmount;
  }

};

////////////////BANK SERVICE CHARGE//////////////////////////

returnBankServiceCharge = async (aadhaar, res) => {
  
  const publicPrivate = await returnPensionDetailsByAadhaar(aadhaar) //get full details
  
  BankType = publicPrivate.Public_Private_Bank

  if (BankType  == "PUBLIC") {
    return (BankCharge = 500);
  } else if (BankType  == "PRIVATE") {
    return (BankCharge = 550);
  }

};





module.exports = {};
