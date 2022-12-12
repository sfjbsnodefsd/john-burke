const PensionerController = require("../../API/Pensioner.controller");
const PensionerModel = require("../../API/Pensioner.model");
const httpMocks = require('node-mocks-http');
const allPensioners = require("../mock-data/all-pensioners.json");

//mock functions
PensionerModel.findOne = jest.fn()
PensionerModel.find = jest.fn();

let req, res, next;
const AadhaarID = "8080";

beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = jest.fn();
});

describe("PensionerController .PensionerList ", () => {
    it("should have a PensionerList  function", () => {
      expect(typeof PensionerController .PensionerList ).toBe("function");
    });
    it("should call PensionerModel.find({})", async () => {
      await PensionerController .PensionerList (req, res, next);
      expect(PensionerModel.find).toHaveBeenCalledWith({}, { _id: 0, __v: 0 });
    });
    it("should return response with status 200 and all Pensioners", async () => {
      PensionerModel.find.mockReturnValue(allPensioners);
      await PensionerController .PensionerList (req, res, next);
      expect(res.statusCode).toBe(200);
      expect(res._isEndCalled()).toBeTruthy();
      expect(res._getJSONData()).toStrictEqual(allPensioners);
    });
    it("should handle errors in PensionerList ", async () => {
      const errorMessage = { message: "Error finding" };
      const rejectedPromise = Promise.reject(errorMessage);
      PensionerModel.find.mockReturnValue(rejectedPromise);
      await PensionerController .PensionerList (req, res, next);
      expect(next).toHaveBeenCalledWith(errorMessage);
    });
  });

  ///////////////GET BY ID AADHAAR UNIT TEST////////////
  describe("PensionerController.PensionerByID", () => {
    it("should have a PensionerByID function", () => {
      expect(typeof PensionerController.PensionerByID).toBe("function");
    });
    it("should call PensionerModel.findOne ", async () => {
      req.params.aadhaar = AadhaarID
      await PensionerController.PensionerByID(req, res, next);
      expect(PensionerModel.findOne).toBeCalledWith( { aadhaar: AadhaarID },
        { _id: 0, __v: 0 });
    });
    it("should return json body and response code 200", async () => {
      PensionerModel.findOne.mockReturnValue(allPensioners);
      await PensionerController.PensionerByID(req, res, next);
      expect(res.statusCode).toBe(200);
      expect(res._getJSONData()).toStrictEqual(allPensioners);
      expect(res._isEndCalled()).toBeTruthy();
    });
    it("should do error handling", async () => {
      const errorMessage = { message: "error finding PensionerModel" };
      const rejectedPromise = Promise.reject(errorMessage);
      PensionerModel.findOne.mockReturnValue(rejectedPromise);
      await PensionerController.PensionerByID(req, res, next);
      expect(next).toBeCalledWith(errorMessage);
    });
  });