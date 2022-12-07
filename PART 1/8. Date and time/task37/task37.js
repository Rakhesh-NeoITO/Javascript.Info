let date = new Date(2015, 0, 2);
console.log(date)

function getDateAgo(date, days) {
  let copyDate = new Date(date);
  
  copyDate.setDate(copyDate.getDate() - days);
  console.log(copyDate)
  return copyDate.getDate();

}

console.log( getDateAgo(date, 365) );
