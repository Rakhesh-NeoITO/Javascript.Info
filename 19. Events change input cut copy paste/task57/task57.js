let initial = document.getElementById('initial');
let months = document.getElementById('months');
let interest = document.getElementById('interest');

let newInitial = parseInt(initial.value);
let newMonths = parseInt(months.value)/12;
let newIntrest = parseInt(interest.value) / 100;
let result = Math.round(newInitial * (1 + newIntrest) ** newMonths);

document.getElementById('money-after').innerHTML = result;
  
let divHeight = result / newInitial * 100 ;
document.getElementById('finalBar').style.height = divHeight + 'px';

document.getElementById('money-after').innerHTML = result;
document.getElementById('money-before').innerHTML = initial.value;


initial.addEventListener('input', calculate);
months.addEventListener('input', calculate);
interest.addEventListener('input', calculate);

function calculate() {
 
  let newInitial = parseInt(initial.value);
  let newMonths = parseInt(months.value)/12;
  let newIntrest = parseInt(interest.value) / 100;
  let result = Math.round(newInitial * (1 + newIntrest) ** newMonths);


  document.getElementById('money-before').innerHTML = newInitial;
  document.getElementById('money-after').innerHTML = result;
  
  let divHeight = result / newInitial * 100 ;
  document.getElementById('finalBar').style.height = divHeight + 'px';


}