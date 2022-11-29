let table = document.getElementById('bagua-table')
let tdArray = table.getElementsByTagName('td');
//console.log(tdArray);

for(let i = 0; i < tdArray.length; i++){
  //console.log(tdArray[i])
  tdArray[i].addEventListener('click', tableShow);
  function tableShow () {
    let backgroundColor = window.getComputedStyle( tdArray[i] ).getPropertyValue('background-color');
    let tdValues = tdArray[i].getBoundingClientRect();
    let input = document.createElement('input');
    input.className = 'input';
    let enterButton = document.createElement('button');
    let closeButton = document.createElement('button');
    enterButton.className = 'enterButton';
    closeButton.className = 'enterButton';
    enterButton.innerHTML = "Enter";
    closeButton.innerHTML = "Close";
    console.log(backgroundColor);

    let tdValue = tdArray[i].innerHTML
   
    input.style.height = tdArray[i].offsetHeight + 'px';
    input.value = tdValue;
    
    tdArray[i].replaceWith(input);

    input.insertAdjacentElement('afterend', enterButton);
    enterButton.insertAdjacentElement('afterend', closeButton);

    enterButton.addEventListener('click',enter);
    closeButton.addEventListener('click',close);

    enterButton.style.left = tdValues.left + 'px';
    enterButton.style.top = tdValues.bottom+ enterButton.offsetHeight + 'px';
    closeButton.style.left = tdValues.left +enterButton.offsetWidth+ 'px';
    closeButton.style.top = tdValues.bottom+ closeButton.offsetHeight + 'px';
    
    
   function enter(){
      let td = document.createElement('td')
      td.innerHTML = input.value;
      console.log(backgroundColor)
      td.style.backgroundColor = backgroundColor

      input.replaceWith(td);

      enterButton.remove();
      closeButton.remove();
    //  document.body.append(td)
     //console.log(value)
     td.addEventListener('click', tableShow);
    }

  function close(){
      let td = document.createElement('td')
      let a = tdValue;
      console.log(a);
      td.innerHTML = tdValue;
      console.log(backgroundColor)
      td.style.backgroundColor = backgroundColor;

      input.replaceWith(td);

      enterButton.remove();
      closeButton.remove();
      td.addEventListener('click', tableShow);
    //  document.body.append(td)
     //console.log(value)

    }
  }  

 

}

