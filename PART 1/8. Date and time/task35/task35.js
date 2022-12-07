let date = new Date(2022, 11, 1); 
console.log(date)
function getWeekDay(date) {
  let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

  return days[ date.getDay() ];
}

console.log( getWeekDay(date) );