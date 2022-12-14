const loginController = require("../../API/login.controller");
const MemberModel = require("../../API/login.model");
const httpMocks = require("node-mocks-http");
const newLogin = require("../mock-data/newLogin.json");

MemberModel.create = jest.fn();
MemberModel.findOne = jest.fn();

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
  it("should return 201 response code by calling MemberMode.create", async () => {
    await loginController.SignUpMember(req, res, next);
    expect(MemberModel.create)
    expect(res.statusCode).toBe(201);
    expect(res._isEndCalled()).toBeTruthy();
  });
  it("should return json body in response", async () => {
    const result = newLogin;
    MemberModel.create.mockReturnValue(newLogin);
    await loginController.SignUpMember(req, res, next);
    expect(res._getJSONData()).toStrictEqual({
      message: "Member Created!",
      result,
    });
  });
});


