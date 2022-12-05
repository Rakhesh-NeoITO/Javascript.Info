let john = { name: "John", age: 20 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 40 };

let arr = [ john, pete, mary ];

function getAverageAge(arr) {
  return arr.reduce((sum, current) => sum + current.age, 0) / arr.length;
}

console.log( getAverageAge(arr) );