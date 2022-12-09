let i = 0;

setTimeout(() => console.log(i), 100); 

for(let j = 0; j < 1000000000; j++) {
  i++;
}

console.log(i)