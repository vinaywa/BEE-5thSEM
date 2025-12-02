const User=require("./model/userSchema")
const request=require("supertest")
const app=require("./server")
jest.mock("./model/userSchema")
describe("POST/api/users/register",()=>{
    it("should return user Exist if he try to register email which are already present in database",async()=>{
        User.findOne.mockResolvedValueOnce(true);
      let response=await request(app).post("/api/users/register").send({
        name:"vinay",
        email:"vinay@gmail.com",
        password:789456
      })
      expect(response.body.message).toBe("User already exists")
    })
    it("should create new user with email vinay@gmail.com",async()=>{
        User.findOne.mockResolvedValueOnce(false)
        User.create.mockResolvedValueOnce({
            name:"vinay",
        email:"vinay@gmail.com",
        password:789456
        })
        let response=await request(app).post("/api/users/register").send({
             name:"vinay",
        email:"vinay@gmail.com",
        password:789456
        })
         expect(response.body.message).toBe("User registered succesfully")
         expect(response.body.data).toEqual({
            name:"vinay",
        email:"vinay@gmail.com",
        password:789456
         })
    })

})
