let clickButton = document.querySelector('button');
clickButton.addEventListener("click", () => console.log('1'));
//First add the click event and prints
clickButton.removeEventListener("click", () => console.log("2"));
//removes the click event not prints
clickButton.onclick = () => console.log('3')
//add the onclick event and prints
console.log(clickButton)