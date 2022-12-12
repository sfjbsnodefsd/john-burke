const loginController = require("../../API/login.controller");
const MemberModel = require("../../API/login.model");
const httpMocks = require('node-mocks-http');
const newLogin = require("../mock-data/newLogin.json");



MemberModel.create = jest.fn();

let req, res, next;

beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = jest.fn();
});

describe("loginController.SignUpMember", () => {
    beforeEach(() => {
        req.body = newLogin;
    });

    it("should have a SignUpMemberfunction", () => {
        expect(typeof loginController.SignUpMember).toBe("function");
    });
    it("should call MemberModel.create()", async() => {
        await loginController.SignUpMember(req, res, next);
        
        expect(MemberModel.create).toBeCalledWith(newLogin);
    });
    //   it("should return 201 response code", async () => {
    //     await loginController.SignUpMember(req, res, next);
    //     expect(res.statusCode).toBe(201);
    //     expect(res._isEndCalled()).toBeTruthy();
    //   });
    //   it("should return json body in response", async () => {
    //     memberModel.create.mockReturnValue(newLogin);
    //     await loginController.SignUpMember(req, res, next);
    //     expect(res._getJSONData()).toStrictEqual(newLogin);
    //   });
});
