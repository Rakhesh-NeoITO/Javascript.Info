let date = new Date(2022, 11, 4);
console.log(date.getDay());

function getLocalDay(date) {

  let day = date.getDay();
  
  let days = [' ', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

  if (day == 0) { 
    day = 7;
  }

  console.log(days[day])
  return day;
}

console.log( getLocalDay(date) );