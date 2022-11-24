let field = document.getElementById('field');
let ball = document.getElementById('ball');


let b = ball.offsetHeight
console.log(b)

function placeTheBall(e){
  console.log(e.clientX,e.clientY)
  clickPositionX = e.clientX;
  clickPositionY = e.clientY;
  
  if((clickPositionY > field.clientTop+10+b/2) && 
      ( clickPositionY < field.clientHeight ) && 
      ( clickPositionX > field.offsetLeft+10+b/2) &&
      ( clickPositionX < field.clientWidth) ){
    console.log(field.clientHeight);
    console.log(clickPositionX + ':' + clickPositionY)
    
    ballMove(clickPositionX, clickPositionY, b);
  }
  
}

function ballMove(clickPositionX, clickPositionY, b){
  ball.style.top = clickPositionY - b + "px";
  ball.style.left = clickPositionX - b  + "px";
}


//Code given in the Solution 

// function placeTheBall(event){
//   let fieldCoord = field.getBoundingClientRect();
//   let ballCoord = {
//     top: event.clientY - fieldCoord.top - field.clientTop - ball.clientHeight / 2,
//     left: event.clientX - fieldCoord.left - field.clientLeft - ball.clientWidth / 2
//   };

//   if (ballCoord.top < 0) ballCoord.top = 0;

//   if (ballCoord.left < 0) ballCoord.left = 0;

//   if (ballCoord.left + ball.clientWidth > field.clientWidth) {
//     ballCoord.left = field.clientWidth - ball.clientWidth;
//   }

//   if (ballCoord.top + ball.clientHeight > field.clientHeight) {
//     ballCoord.top = field.clientHeight - ball.clientHeight;
//   }
//   ball.style.top = ballCoord.top + "px";
//   ball.style.left = ballCoord.left + "px";
// }