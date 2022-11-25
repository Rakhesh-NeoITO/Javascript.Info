let tableBody = document.querySelector('tbody');
let names = tableBody.getElementsByTagName('tr');
let elements = [];
console.log(elements);

for (let i = 0; i < names.length ; i++) {
  elements.push(names[i]);
}

let grid = document.getElementById('grid');

grid.addEventListener ('click', function (event) {
  
  if (event.target.tagName === 'TH' ) {
    console.log(event.target.dataset.type);

    if (event.target.dataset.type == 'number') {
        elements.sort(function (a, b){
        return (a.querySelector('td').innerHTML+'') - (b.querySelector('td').innerHTML+'');
      })
    }

    if (event.target.dataset.type == 'string') {
        elements.sort(function (a, b){
       // console.log(b.querySelector('tr :nth-child(2)').innerHTML)
        return ((a.querySelector('tr :nth-child(2)').innerHTML + '').localeCompare(b.querySelector('tr :nth-child(2)').innerHTML + ''));
      })
    }

  }
  else return

  tableBody.innerHTML = ""
  for (let i = 0; i < elements.length; i++) {

  tableBody.innerHTML += elements[i].innerHTML;
  
  }

})
// Code in The Solution

// grid.onclick = function(event) {
//   if (event.target.tagName != 'TH') return;

//   let th = event.target;
  
//   sortGrid(th.cellIndex, th.dataset.type);
// };

// function sortGrid(colNum, type) {
//   let tbody = grid.querySelector('tbody');
//   let rowsArray = Array.from(tbody.rows);
//   let compare;

//   switch (type) {
//     case 'number':
//       compare = function(rowA, rowB) {
//         return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
//       };
//       break;
//     case 'string':
//       compare = function(rowA, rowB) {
//         return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
//       };
//       break;
//   } 

//   rowsArray.sort(compare);

//   tbody.append(...rowsArray);
// }