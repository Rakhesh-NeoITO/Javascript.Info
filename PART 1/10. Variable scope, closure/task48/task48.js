'use strict';
let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
  sayHi();//works fine 
}

sayHi();// never works beacuse function declared inside the scope of if.