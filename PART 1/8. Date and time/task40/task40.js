function getSecondsToTomorrow() {
  let date = new Date();
  let secondsLeft = (24*3600) - ( ( date.getHours() * 3600 ) + ( date.getMinutes() * 60 ) + date.getSeconds() );
  console.log(secondsLeft);
  console.log(24*3600)
}

getSecondsToTomorrow();