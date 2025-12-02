const math=require("./math")
jest.mock("./math"); // module mocking

test("multiplication of 2 and 3 is 6",()=>{
    math.multiply.mockReturnValueOnce(6);
    expect(math.multiply(2,3)).toBe(6)
})
test("sub of 100 and 50 is 50",()=>{
    math.sub.mockReturnValueOnce(50);
    expect(math.sub(100,50)).toBe(50)
})
test("modulo of 10 and 5 is 0",()=>{
    math.modulo.mockReturnValueOnce(0);
    expect(math.modulo(10,5)).toBe(0)
})

