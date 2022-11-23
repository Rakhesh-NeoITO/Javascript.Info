function parseTime(){
    let date = new Date();
//console.log(date)
let hour = date.getHours();
let minute = date.getMinutes()
let second = date.getSeconds()
//console.log(hour)
//console.log(minute)
//console.log(second)
    document.getElementById("hh").innerHTML=hour+":"
    document.getElementById("mm").innerHTML=minute+":"
    document.getElementById("ss").innerHTML=second
}

let intervalId;

function start(){
    intervalId = setInterval(parseTime,1000);
}
function stop(){
    clearInterval(intervalId);
}
