function showNotification(options){
  let displayDiv= document.createElement('span');
  displayDiv.className = "displayDiv";
  displayDiv.innerHTML = options.html;
  displayDiv.style.position = "absolute"
  displayDiv.style.top = options.top + "px";
  displayDiv.style.right = options.right + "px";
  document.body.append(displayDiv);
    
setTimeout(() => displayDiv.innerHTML = "", 1000);

};

let intervalId = 1;

setInterval(()=> {showNotification({
  top:10,
  right:10,
  html:"Hello" + intervalId++,
  className:"Welcome"
  });
},1500);

