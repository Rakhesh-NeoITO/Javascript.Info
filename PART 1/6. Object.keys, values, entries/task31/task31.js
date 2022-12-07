let user = {
  name: 'John',
  dob: '10-02.1887',
  age: 30 
};

function count(obj) {

  return Object.keys(obj).length;
  // let num = 0;

  // for(let key of Object.keys(obj)) {
  //   num++
  // }
  // return num
}

console.log( count(user) );