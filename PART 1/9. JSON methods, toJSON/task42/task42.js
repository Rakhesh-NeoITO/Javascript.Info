let user = {
  name: "John Smith",
  age: 35
};

let newUser = JSON.stringify(user);
let newUser2 = JSON.parse(newUser);

console.log(newUser);
console.log(newUser2);