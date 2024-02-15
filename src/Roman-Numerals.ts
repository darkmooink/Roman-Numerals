// I = 1
// V = 5
// X = 10
// L = 50
// C = 100
// D = 500
// M = 1000

class RomanConversion {
  roman: string;
  decimal: number;

  constructor(roman:string, decimal:number){
    this.roman = roman;
    this.decimal = decimal;
  };
};
  const valueTable = [
    new RomanConversion("M", 1000), 
    new RomanConversion("CM", 900), 
    new RomanConversion("D", 500), 
    new RomanConversion("CD", 400), 
    new RomanConversion("C", 100), 
    new RomanConversion("XC", 90), 
    new RomanConversion("L", 50), 
    new RomanConversion("XL", 40), 
    new RomanConversion("X", 10),
    new RomanConversion("IX", 9),
    new RomanConversion("V",5), 
    new RomanConversion("IV",4), 
    new RomanConversion("I",1),
  ];

export function decimalToRoman(number: number): string {
  let output :string = ""


  valueTable.forEach((conversion)=>{
    
      const numberOfThisLetter = Math.floor(number/conversion.decimal);
      output = [output, conversion.roman.repeat(numberOfThisLetter)].join("");
      number = number-(numberOfThisLetter*conversion.decimal);
    
    }
  )
  return output;
};


export function romanToDecimal(roman:string):number{
  let total:number = 0
  valueTable.forEach((conversion)=>{
    while(roman.startsWith(conversion.roman)){
      total += conversion.decimal
      roman = roman.replace(conversion.roman,"")
    }
  })
  return total;
}