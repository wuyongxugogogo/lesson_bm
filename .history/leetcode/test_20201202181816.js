var plusOne = function(digits) {
  digits.reverse();
  for(let i = 0; i < digits.length; i++){
    if(digits[i] < 9) {
      digits[i] += 1;
      return digits.reverse();
    } else {
      digits[i] = 0;
      if (i === digits.length -1) {
        digits.push(0);
      }
    }
  }
  
};

console.log(plusOne([9,9,9]));