const PensionerController = require("../../API/Pensioner.controller");
const PensionerModel = require("../../API/Pensioner.model");
const httpMocks = require('node-mocks-http');
const allPensioners = require("../mock-data/all-pensioners.json");



PensionerModel.find = jest.fn();

let req, res, next;
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