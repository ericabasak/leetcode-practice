// Power of four
// given an integer n, return true, if it is a power of four,
// otherwise return false. an integer n is a power of four,
// if there exists an integer x such that n == 4^x.

function isPowerOfFour(num){
  let s = Math.sqrt(num);
  if(parseInt(s) != s){
    return false;
  }

  s = Math.sqrt(s);
  if(parseInt(s) != s){
    return false;
  }
  return true;
}

console.log(isPowerOfFour(81));
console.log(isPowerOfFour(16));
console.log(isPowerOfFour(5));

