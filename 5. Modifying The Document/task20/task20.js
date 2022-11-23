let tableBody = document.querySelector('tbody');
let names = tableBody.getElementsByTagName('tr');
let elements = [];

for(let i = 0; i < names.length ; i++){
  elements.push(names[i]);
}

elements.sort(function (a, b){
  return (a.querySelector('td').innerHTML+'').localeCompare(b.querySelector('td').innerHTML+'');
})

console.log(elements)
tableBody.innerHTML = ""
for(let i = 0; i < elements.length; i++){
  
  tableBody.innerHTML += elements[i].innerHTML;
  console.log(elements[i].querySelector('td'))
}


