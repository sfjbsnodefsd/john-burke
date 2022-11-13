# Pension Portal


**Authorization Service** 
ENDPOINTS   

            POST:/login        //Let members login 
         
            POST:/SignUp      //create a new member


**Pension Details Module** 
ENDPOINTS 
            
            POST:/importCSV     //import the csv to a mongodb database
           
            GET: /PensionerList   //display all Pensioner Details
           
            GET: /:aadhaar        //display by aadhaar number the pensioner Details


**Process Pensione Module**          ENDPOINTS  
            
            GET:/:aadhaar/Details_Pension        //display Details with PensionAmount/Bank fee
           
            GET:/:aadhaar/pension              //display Pension Amount and Bank fee