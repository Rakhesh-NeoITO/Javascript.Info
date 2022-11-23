function createCalender(element, y, m){

  let table = `<table><tr><th>SUN</th><th>MON</th>
      <th>TUE</th><th>WED</th><th>THU</th>
          <th>FRI</th><th>SAT</th></tr><tr>`;
  let month = m-1;

  if ( month > 11 || month < 1 ) {
      alert(month + 1 + ": not a month give any valid month");
  } else {
      let date= new Date(y,month);
      console.log(month);
      console.log(date);
      console.log("month :" + month);
      console.log("day :" + date.getDay());
      console.log("date :" + date.getDate());
      console.log("month :" + date.getMonth());

      for ( let i = 0; i < date.getDay(); i++ ) {
          table += `<td></td>`;
      }

      while ( date.getMonth() == month ) {
          table += `<td>`+ date.getDate() + `</td>`;
          console.log(date.getMonth());

          if( date.getDay() == 6 ){
              table += `</tr><tr>`;
          }

          date.setDate( date.getDate() + 1);
      }

      console.log( date.getDay() );

      if ( date.getDay !== 0) {
          date.setDate( date.getDate() - 1);
          console.log( date.getDay() );

          for( let i = date.getDay(); i < 6; i++) {
              table += `<td></td>`;
          }
      }

      table += `</table>`;
      element.innerHTML = table
  }

}
createCalender(element, 2022, 4);