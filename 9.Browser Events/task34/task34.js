let clickShow = document.getElementById('click');
let set = document.createElement('span');
    set.innerHTML = '▶';
    set.style.color = "green";
    clickShow.prepend(set);

function showList() {
  let list = document.querySelector(".listItems");

  if (list.style.display === 'none') {
    set.innerHTML = '▼';
    list.style.display = "block";
  } else {
    set.innerHTML = '▶';
    list.style.display = "none";
  }
  
}