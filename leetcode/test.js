const maxMoney = (arr) => {
  let min = arr[0];
  let max = 0;
  let result = [];
  for(let i = 1; i < arr.length; i++) {
    if(min > arr[i]) {
      min = arr[i];
    }else if (arr[i] - min > max) {
      max = arr[i] - min;
    }
  }
  for(let j = 0; j < arr.length - 1; j++) {
    for(let k = j + 1; k < arr.length; k++) {
      if(arr[k] - arr[j] == max) {
        result = arr.slice(j, k + 1);
      } else {
        continue
      }
    }
  }
  return result
}

console.log(maxMoney([20,18,29,17,22,21,30,19]));