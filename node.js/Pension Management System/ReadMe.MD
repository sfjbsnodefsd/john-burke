
**Authorization Service** 
ENDPOINTS   

            POST:/login        //Let members login
           
            GET:/getAll        //get all members
         
            POST:/register     //create a new member


**Pension Details Module** 
ENDPOINTS 
            
            POST:/importCSV     //import the csv to a mongodb database
           
            GET:/findAll        //display all Pensioner Details
           
            GET:/aadhaar        //display by aadhaar number the pensioner Details


**Process Pensione Module**          ENDPOINTS  

            PATCH:/:aadhaar                   //display by aadhaar number the pensioner Details
            
            GET:/:aadhaar/bothDetails        //display Details with PensionAmount/Bank fee
           
            GET:/:aadhaar/both               //display Pension Amount and Bank fee
