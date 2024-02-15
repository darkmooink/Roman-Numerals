import { romanNumeral } from "./Roman-Numerals";
// I = 1
// V = 5
// X = 10
// L = 50
// C = 100
// D = 500
// M = 1000
describe("Convert decimal numbers to Roman Numerals", () => {
  const testData = [
    {in:1,out:"I"},
    {in:5, out:"V"}
]
const dataInput = 0, dataOutput = 1
  testData.forEach((data=>{
    it(`The number ${data.in} should convert into ${data.out}`, () => {
      expect(romanNumeral(data.in)).toBe(data.out);
    });
  }))
});
