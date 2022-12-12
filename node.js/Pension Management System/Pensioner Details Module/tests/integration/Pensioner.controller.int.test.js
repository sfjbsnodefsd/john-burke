const request = require("supertest");
const app = require("../../index")
const { connectDB, dropDB, dropCollections } = require("../../setuptestdb");
const PensionerMockData = require("../mock-data/all-pensioners.json");
const PensionerModel = require("../../API/Pensioner.model");


let firstPensioner;
const nonExistingAADHAAR = "580456";

beforeAll(async () => {
  await connectDB()
 });
 beforeEach(async() => {
  const newPensioner= await PensionerModel(PensionerMockData);
  await newPensioner.save();
});
 afterAll(async () => {
  await dropDB();
 });
 afterEach(async () => {
  await dropCollections();
 });



describe("/PensionerList", () => {
  test("GET " + "/PensionerList", async () => {

    const response = await request(app).get("/PensionerList");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body[0].aadhaar).toBeDefined();
    expect(response.body[0].Name).toBeDefined();
    expect(response.body[0].Date_of_birth).toBeDefined();
    expect(response.body[0].PAN).toBeDefined();
    expect(response.body[0].SalaryEarned).toBeDefined();
    expect(response.body[0].Allowances).toBeDefined();
    expect(response.body[0].Self_or_Family_pension).toBeDefined();
    expect(response.body[0].Bank_Name).toBeDefined();
    expect(response.body[0].Bank_Acc_No).toBeDefined();
    expect(response.body[0].Public_Private_Bank).toBeDefined();
   
    firstPensioner = response.body[0];
    newPensionerId = response.body[0].aadhaar;
   });

  test("GET by aadhaar " + "/:aadhaar", async () => {

    const response = await request(app).get("/"+ firstPensioner.aadhaar);
    expect(response.statusCode).toBe(200);
    expect(response.body.aadhaar).toBe(firstPensioner.aadhaar);
    expect(response.body.Name).toBe(firstPensioner.Name);
  });
  test("GET Pensioner by Aadhaar doesn't exist" + "/:aadhaar", async () => {
    
    const response = await request(app).get("/:aadhaar" + nonExistingAADHAAR);
    expect(response.statusCode).toBe(500);
  });

  test("PUT " + "/:aadhaar/update", async () => {
    const testData = { "Name": "John", "Allowances" : "500"};
    const response = await request(app)
    .put("/" + firstPensioner.aadhaar +"/update")
    .send(testData);
    expect(response.statusCode).toBe(200);
    expect(response.body).toStrictEqual( {"UpdatedCount": 1});
    
  });
  it("should return 500 on PUT " + "/:aadhaar/update", async () => {
    const testData = { "Name": "John", "Allowances" : "500"};
    const response = await request(app)
      .put("/" + nonExistingAADHAAR +"/update" )
      .send(testData);
    expect(response.statusCode).toBe(400);
  });
})