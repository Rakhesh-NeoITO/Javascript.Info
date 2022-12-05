let arr = [54, 54, 5, 3, 8, 1, 2, 7, 55, 3, 8];

function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    //console.log(i)
    if (val < a || val > b) {
      arr.splice(i, 1);
       i--
    }
  }

}

filterRangeInPlace(arr, 1, 4);

console.log(arr)