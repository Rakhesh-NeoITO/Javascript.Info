function makeArmy() {
  let shooters = [];


  for(let i = 0; i < 10; i++) { //while loop changed to for
    let shooter = function() { 
      let id = i
      console.log(id); 
    };
    shooters.push(shooter); 

  }

  return shooters;
}

let army = makeArmy();
console.log(army);
army[0]();
army[9]();