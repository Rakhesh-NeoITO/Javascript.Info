function formatDate(date) {
  let presentDate = new Date();
  let previousDate = date;

  let difference = presentDate - previousDate;

  if(difference <= 1000) console.log('Right Now');
  else if ( difference < 60 * 1000 ) console.log(difference/1000 + ' sec. ago');
  else if ( difference < 3600*1000 ) console.log(difference/(60*1000) + ' min. ago');
  else if ( difference < 86400 * 1000 ) console.log(difference/(3600*1000) + ' hours. ago');
  else if (difference >= 86400 * 1000  ) {

    let prevDate = previousDate.getDate();
    let prevMonth = previousDate.getMonth();
    let prevHour = previousDate.getHours();
    let prevMinute = previousDate.getMinutes();

    if(prevDate < 10)prevDate = '0' + prevDate;
    if(prevMonth < 10)prevMonth = '0' + prevMonth;
    if(prevHour < 10)prevHour = '0' + prevHour;
    if(prevMinute < 10)prevMinute = '0' + prevMinute;

    console.log(prevDate + '.' + prevMonth + '.' + presentDate.getFullYear() + ' ' + prevHour + ':' + prevMinute + ' ago');
  
  }
}

formatDate(new Date(new Date - 86400 * 1000 )) ;

