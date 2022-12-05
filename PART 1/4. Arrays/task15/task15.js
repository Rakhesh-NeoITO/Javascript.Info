function sumInput() {
  let arrayOfNum = [];
  let sumOfNum = 0;

  while(true){
    let num = prompt('enter a number', 0);

    if(num === '' || num === null || !isFinite(num) ) break;

    arrayOfNum.push(parseInt(num));
  }4
  
  for(let number of arrayOfNum) {
    sumOfNum += number;
  }
  return sumOfNum;
}

console.log(sumInput())