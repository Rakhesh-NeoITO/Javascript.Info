let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(arr) {
  let value = arr.reduce(function(obj, user) {
    obj[user.id] = user;
    return obj;
  }, {});
  return value
}

console.log( groupById(users) );
console.log(users)