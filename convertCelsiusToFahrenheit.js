// the algo to convert from celsius to fahrenheit is the 
// temperature in celsius times 9/5, plus 32.

// you are given a variable celsius representing a temperature in
// celsius. use the variable fahrenheit already defined and
// assign is the fahrenheit temperature equivalent to the given
// celsius temperature. use the algo mentioned above to helo
// convert the celius temp to fahrenheit.


function convertToF(celsius) {
  let fahrenheit = (celsius * (9/5) + 32);
  return fahrenheit;
}

console.log(convertToF(30));
console.log(convertToF(33));
console.log(convertToF(40));