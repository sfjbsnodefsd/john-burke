//import fetch 
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));


///////////////Return Pensioner Details from Details module/////////////////////
const PensionerByID = async (aadhaarNum) => {
  //return using fetch, getting details from pension details module
  const response = await fetch(`http://localhost:5001/${aadhaarNum}`);
  return await response.json()
};


/////////////Calculate PENSION AMOUNT///////////////////////////////
const CalculatePension = async () => {
  const { SalaryEarned, Allowances, Self_or_Family_pension } = personDetails

  if (Self_or_Family_pension == "SELF") {
    const pensionAmount = ((SalaryEarned * 0.8) + Allowances).toFixed(2); //toFixed rounds number to 2 decimal places
    return ({ pensionAmount })
  } else if (Self_or_Family_pension == "FAMILY") {
    const pensionAmount = ((SalaryEarned * 0.5) + Allowances).toFixed(2); //toFixed rounds number to 2 decimal places
    return ({ pensionAmount })
  }
};


////////////////Calculate BANK FEE//////////////////////////
const CalculateBankFee = async () => {
  const { Public_Private_Bank } = personDetails

  if (Public_Private_Bank == "PUBLIC") {
    Bankfee = 500;
    return ({ Bankfee })
  } else if (Public_Private_Bank == "PRIVATE") {
    Bankfee = 550;
    return ({ Bankfee })
  }
};


module.exports = { PensionerByID, CalculatePension, CalculateBankFee };




