//using setInterval
function printNumbers(from, to) {

 let timerId = setInterval(() => {
  console.log(from);
  from++;

  if(from == to){
    clearInterval(timerId);
  }
 },1000);
 
}

printNumbers(2,10);

//using setTimeout
function printTheNumbers(from, to) {

  let timerId = setTimeout(function print() {
   console.log(from);
   from++;
 
   if(from < to){
     setTimeout(print, 1000);
   }
  },1000);
  
 }
 
 printTheNumbers(2,10);