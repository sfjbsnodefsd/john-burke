const request = require("supertest");
const app = require("../../app");
const { connectDB, dropDB, dropCollections } = require("../../TestMockDB");
const loginMockData = require("../mock-data/newLogin.json");


beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await dropDB();
});
afterEach(async () => {
  await dropCollections();
});

describe("/SignUpMemeber", () => {
  test("POST " + "/SignUp", async () => {
    const response = await request(app).post("/SignUp").send(loginMockData);
    expect(response.statusCode).toBe(201);
    expect(response.body.result.email).toBe(loginMockData.email);
  });
});
test(
  "should return error 409 on malformed data with POST" + "/SignUp",
  async () => {
    const response = await request(app)
      .post("/SignUp")
      .send({ email: "wrongFormat" });
    expect(response.statusCode).toBe(409);
    expect(response.body).toStrictEqual({
      errors: {},
    });
  }
);
