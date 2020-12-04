var plusOne = function(digits) {
  digits.reverse();
  for(let i = 0; i < digits.length; i++){
    if(digits[i] < 9) {
      digits[i] += 1;
      return digits.reverse();
    } else {
      digits[i] = 0;
      break;
    }
  }
};

console.log(plusOne([9,9,9]));