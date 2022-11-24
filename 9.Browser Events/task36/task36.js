let carousel = document.querySelector('.carousel')
let ulList = carousel.querySelector('ul');
listElem = document.querySelectorAll('li')

let widthImg = 130;
let count = 3;
let position = 0;
function leftArrow() {
  position += widthImg*count;
  // incrementing the position 
  // (-ve value if the right arrow clicked before) 
  // with 3 times of image width
  position = Math.min(position, 0)
  // repat the step if the position is less than 0
  ulList.style.marginLeft = position + "px";
  // adding the position to the left side margin
  // then the margin value increase and 3 pics moves 
  // to the right side
  console.log(position)
}

function rightArrow() {
  position -= widthImg * count;
  // decrementing the position 
  // (+ve value if the right arrow clicked before) 
  // with 3 times of image width
  position = Math.max(position, -widthImg * (listElem.length - count))
  // adding -ve value of widthImg*listElem.length-3
  // beacuse we need the last 3 li all the time
  //ulList.style.marginLeft = -widthImg*listelem.length-count
  ulList.style.marginLeft = position + "px";
  // adding the position to the left side margin
  // then the margin value decrease and 3 pics moves 
  // to the left side  
  console.log(position)
}