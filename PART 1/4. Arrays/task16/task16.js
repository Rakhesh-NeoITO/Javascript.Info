function getMaxSubSum(arr) {
  let maxSum = 0; 

  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    //console.log('i :', i)
    for (let j = i; j < arr.length; j++) {
      //console.log('j :', j)
      //console.log('arr[j] :', arr[j])
      sumFixedStart += arr[j];
      //console.log('sumFixedStart :', sumFixedStart)
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
}

console.log( getMaxSubSum([-1, 2, 3, -9]) );
console.log( getMaxSubSum([-1, 2, 3, -9, 11]) );
console.log( getMaxSubSum([-2, -1, 1, 2]) );
console.log( getMaxSubSum([1, 2, 3]) );
console.log( getMaxSubSum([100, -9, 2, -3, 5]) );