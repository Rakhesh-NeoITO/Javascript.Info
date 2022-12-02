function randomInteger(min, max) {
  let randomNumber = min + Math.random() * max ;
  console.log(Math.trunc(randomNumber));
}

randomInteger(5, 100);