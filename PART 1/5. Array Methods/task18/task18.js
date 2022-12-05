let arr = [5, 3, 8, 1];

function filerRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}

let filtered = filerRange(arr, 1, 4);
console.log(filtered)