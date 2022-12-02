function random(min, max) {
  let number = min + Math.random() *(max -min);
  console.log(number);
}

random(2, 5);