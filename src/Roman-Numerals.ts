// I = 1
// V = 5
// X = 10
// L = 50
// C = 100
// D = 500
// M = 1000

export function romanNumeral(number: number): string {
  let output :string = ""
  const valueTable = [
    new RomanConversion("M", 1000), 
    new RomanConversion("D", 500), 
    new RomanConversion("C", 100), 
    new RomanConversion("L", 50), 
    new RomanConversion("X", 10),
    new RomanConversion("V",5), 
    new RomanConversion("I",1)]
  valueTable.forEach((conversion)=>{

    const numberOfThisLetter = Math.floor(number/conversion.decimal)
    output = [conversion.roman.repeat(numberOfThisLetter), output].join("")
    number = number-(numberOfThisLetter*conversion.decimal)
  })
  return output;
}

class RomanConversion {
  roman: string
  decimal: number

  constructor(roman:string, decimal:number){
    this.roman = roman
    this.decimal = decimal
  }
}
