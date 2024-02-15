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
    {in:5, out:"V"},
    {in:10, out:"X"},
    {in:50, out:"L"},
    {in:100, out:"C"},
    {in:500, out:"D"},
    {in:1000, out:"M"},
    {in:2,out:"II"},
    {in:6, out:"VI"},
    {in:11, out:"XI"},
    {in:51, out:"LI"},
    {in:101, out:"CI"},
    {in:501, out:"DI"},
    {in:1001, out:"MI"},
    {in:16, out:"XVI"},
    {in:56, out:"LVI"},
    {in:106, out:"CVI"},
    {in:506, out:"DVI"},
    {in:1006, out:"MVI"},
    {in:2666, out:"MMDCLXVI"},
]
const dataInput = 0, dataOutput = 1
  testData.forEach((data=>{
    it(`The number ${data.in} should convert into ${data.out}`, () => {
      expect(romanNumeral(data.in)).toBe(data.out);
    });
  }))
});
