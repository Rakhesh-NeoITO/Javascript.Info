function camelize(str) {
  // Sloution in the task 
  let newArray = str.split('-').map( (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
  console.log(newArray)

  //My solution
  let newArry = str.split('-');
  let b = newArry[0];
  let a = []
  for(let i = 1; i < newArry.length; i++) {
   a.push(newArry[i][0].toUpperCase() + newArry[i].slice(1)) ;
  }
 console.log(b + a.join(''))
  
}

camelize("background-color");
camelize("list-style-image") ;
camelize("-webkit-transition"); 