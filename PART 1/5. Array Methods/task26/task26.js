let array = [1, 2, 3];

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  console.log(array)
}

shuffle(array);

// console.log(array)
