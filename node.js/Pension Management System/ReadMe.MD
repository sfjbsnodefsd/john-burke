# Pension Portal
Inside Main-training\node.js\Pension Management System (Frontend)\PensionManagementPortal

## Start frontend server
> Inside PensionManagementPortal folder 
```sh
ng serve --open
```
> Front end will auto create Mongodb in backend 
> by importing a example pensioner list csv to mongodb

- All 3 mircoservices need to be activate for frontend
- Unit testing is done for Auth and Pensioner Details modules
- To use with sonar scanner - run sonarqube and "$ sonar-scanner" to generate file

**Authorization Service--/5000** 
## Running Auth-service

```sh
npm install
npm test
npm start
```

ENDPOINTS  

            POST:/login        //Let members login 
         
            POST:/SignUp      //create a new member


**Pension Details Module--/5001** 
## Running Auth-service

```sh
npm install
npm test
npm start
```
ENDPOINTS 
            
            POST:/importCSV     //import the csv to a mongodb database
           
            GET: /PensionerList   //display all Pensioner Details
           
            GET: /:aadhaar        //display by aadhaar number the pensioner Details

            PUT: /:aadhaar/update   //update pensioner details

**Process Pensioner Module/--5002**         
## Running Auth-service

```sh
npm install
npm start
```
Endpoint
            
            GET:/:aadhaar/Details_Pension        //display Details with PensionAmount/Bank fee