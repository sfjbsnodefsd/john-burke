

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));  //import fetch module


///////////////Pensioner Details/////////////////////
 const returnPensionDetailsByAadhaar = async (aadhaarNum) => {
  //return using fetch, getting details from pension details
    const response = await fetch(`http://localhost:5001/${aadhaarNum}`); //5001 server is fro pensionDetails
    return await response.json()
 
};

/////////////PENSION AMOUNT///////////////////////////////

returnPensionAmount = async (aadhaar, res) => {
  const personDetails = await returnPensionDetailsByAadhaar(aadhaar)
  const {SalaryEarned, Allowances, Self_or_Family_pension} = personDetails

  if (Self_or_Family_pension == "SELF") {
    return "SELF PENSION: " +  ((SalaryEarned * 0.8)+Allowances).toFixed(2); //toFixed rounds number to 2 decimal places

  } else if (Self_or_Family_pension == "FAMILY") {
    return  "FAMILY PENSION: " + ((SalaryEarned * 0.5)+Allowances).toFixed(2); //toFixed rounds number to 2 decimal places
  }

};


////////////////BANK SERVICE CHARGE//////////////////////////

returnBankServiceCharge = async (aadhaar, res) => {
  
  const publicPrivate = await returnPensionDetailsByAadhaar(aadhaar) //get full details
  const {Public_Private_Bank} = publicPrivate 
  

  if (Public_Private_Bank == "PUBLIC") {
    return "BankCharge =" + 500;
  } else if (Public_Private_Bank  == "PRIVATE") {
    return "BankCharge: " + 550;
  }

};







module.exports = {returnPensionDetailsByAadhaar };




