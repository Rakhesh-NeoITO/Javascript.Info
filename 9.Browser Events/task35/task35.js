
let elementsArray = document.querySelectorAll('.pane');

for ( let i = 0; i < elementsArray.length; i++) {
  let closeButton = document.createElement('button');
  closeButton.innerHTML = '[x]';
  closeButton.onclick = () => elementsArray[i].remove();
  elementsArray[i].insertAdjacentElement("afterbegin",closeButton)
}
