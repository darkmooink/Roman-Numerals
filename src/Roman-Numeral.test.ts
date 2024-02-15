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
    {decimal:1,roman:"I"},
    {decimal:5, roman:"V"},
    {decimal:10, roman:"X"},
    {decimal:50, roman:"L"},
    {decimal:100, roman:"C"},
    {decimal:500, roman:"D"},
    {decimal:1000, roman:"M"},
    {decimal:2,roman:"II"},
    {decimal:6, roman:"VI"},
    {decimal:11, roman:"XI"},
    {decimal:51, roman:"LI"},
    {decimal:101, roman:"CI"},
    {decimal:501, roman:"DI"},
    {decimal:1001, roman:"MI"},
    {decimal:16, roman:"XVI"},
    {decimal:56, roman:"LVI"},
    {decimal:106, roman:"CVI"},
    {decimal:506, roman:"DVI"},
    {decimal:1006, roman:"MVI"},
    {decimal:2666, roman:"MMDCLXVI"},
    {decimal:4, roman:"IV"},
    {decimal:9, roman:"IX"},
    {decimal:40, roman:"XL"},
    {decimal:90, roman:"XC"},
    {decimal:400, roman:"CD"},
    {decimal:900, roman:"CM"},
    {decimal:39 , roman:"XXXIX"},
    {decimal:246 , roman:"CCXLVI"},
    {decimal:789 , roman:"DCCLXXXIX"},
    {decimal:2421, roman:"MMCDXXI"},
    {decimal:160 , roman:"CLX"},
    {decimal:207 , roman:"CCVII"},
    {decimal:1009 , roman:"MIX"},
    {decimal:1066 , roman:"MLXVI"},
    {decimal:1776 , roman:"MDCCLXXVI"},
    {decimal:1918 , roman:"MCMXVIII"},
    {decimal:1944 , roman:"MCMXLIV"},
    {decimal:2024 , roman:"MMXXIV"},
]
const dataInput = 0, dataromanput = 1
  testData.forEach((data=>{
    it(`The number ${data.decimal} should convert into ${data.roman}`, () => {
      expect(romanNumeral(data.decimal)).toBe(data.roman);
    });
  }))
});
