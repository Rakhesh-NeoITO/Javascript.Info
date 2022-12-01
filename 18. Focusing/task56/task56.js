let selectDiv = document.getElementById('movingDiv');


selectDiv.addEventListener('click', move);

function move(event) {

 let moving = event.target;
 moving.tabIndex = 1;
  moving.addEventListener('keydown', moveElement);
  moving.style.position = 'absolute';

 

}

function moveElement(event) {
  let position = selectDiv.getBoundingClientRect();
  selectDiv.style.left = (position.left + position.width)+ 'px'
}


