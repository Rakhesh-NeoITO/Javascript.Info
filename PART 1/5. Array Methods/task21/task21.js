let arr = ['HTML', 'Javascript', 'CSS'];

let sorted = [];

for( let i = 0; i < arr.length; i++) {
  sorted[i]= arr[i];
}

console.log(arr);
console.log(sorted);


// To get sorted array 

function copySorted(arr) {
  return arr.slice().sort();
}

let Sorted = copySorted(arr);
console.log(Sorted);