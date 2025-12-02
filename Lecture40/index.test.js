
const sum=jest.fn()
// sum.mockReturnValue(5)
sum.mockReturnValueOnce(5)
test("addition of 2 and 3 is 5",()=>{
// sum.mockReturnValueOnce(5)
    expect(sum(4,5)).toBe(5);
})
test("addition of 6 and 3 is 9",()=>{
    sum.mockReturnValueOnce(5)
    expect(sum(4,5)).toBe(5);
})