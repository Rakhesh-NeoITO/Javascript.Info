let number;
do {
  number = prompt('enter number',0);
} while (!isFinite(number));

console.log(number);