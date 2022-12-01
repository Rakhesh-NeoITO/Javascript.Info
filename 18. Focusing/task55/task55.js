let mouse = document.getElementById('mouse');

 mouse.addEventListener('click', select);
 mouse.addEventListener('blur', unSelect);
 
 function select (event) {
  let mouseElement = event.target;
  mouseElement.tabIndex = 1;
  mouseElement.addEventListener('keydown', moveElement); 
  mouseElement.style.position = 'absolute';
  
};

function unSelect(){
  moveElement.removeEventListener("keydown", moveElement);
  moveElement.removeEventListener("focus", elementSelect);
}

function moveElement(event) {
  let mouseElement = event.target;

  let position = mouse.getBoundingClientRect();
  if(event.code == 'ArrowUp'){
    
    mouseElement.style.top = (position.top - position.height) + 'px' ;
    
  }
  if(event.code == 'ArrowDown'){
    
    mouseElement.style.top = (position.top + position.height) + 'px' ;
    
  }
  if(event.code == 'ArrowLeft'){
    
    mouseElement.style.left = (position.left - position.width) + 'px' ;
  }
  if(event.code == 'ArrowRight'){
    
    mouseElement.style.left = (position.left + position.width) + 'px' ;
    
    
  } 
  //mouseElement.removeEventListener("keydown", moveElement);

};





