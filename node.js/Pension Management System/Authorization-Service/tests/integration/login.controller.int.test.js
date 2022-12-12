// const request = require("supertest")
// const app =  require("../../app")
// const newLogin = require("../mock-data/newLogin.json");
// const mongoose = require("mongoose");

// beforeAll(async () => {
//     await mongoose.disconnect();
//     await mongoose.connect("mongodb://127.0.0.1:27017/PenAuthDB", { useNewUrlParser: true });
//   });


// const endpointUrl = "/SignUp"
//  jest.useFakeTimers()

// describe(endpointUrl,  () => {
//     it("POST" + endpointUrl, async () =>{
//         const response = await request(app)
//         .post(endpointUrl)
//         .send(newLogin)
//         expect(response.statusCode).toBe(201)
//         expect(response.body.result.email).toBe(newLogin.email)
//         expect(response.body.result.password).toBe(newLogin.password)
        

//     })
// })

