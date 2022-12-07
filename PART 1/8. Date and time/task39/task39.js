function getSecondsToday() {
 let date = new Date();
 let secondsPassed = ( date.getHours() * 3600 ) + ( date.getMinutes() * 60 ) + date.getSeconds();
 console.log(secondsPassed);
}

getSecondsToday();