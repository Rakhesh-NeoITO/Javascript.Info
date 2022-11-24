let blockquote = document.querySelector('blockquote');

function showNote(blockquote, position, html) {
  let spanElement = document.createElement('span');
  spanElement.className = "spanElement"
  spanElement.innerHTML = html;
  document.body.append(spanElement);

  positionAt(blockquote, position, spanElement);
}

function positionAt(blockquote, position, spanElement) {
  let a = position.replaceAll('"','');
  // console.log(a)
  let blockquoteCoord = blockquote.getBoundingClientRect();
  switch (position){
    case "top-out" : spanElement.style.top = blockquoteCoord.top - spanElement.offsetHeight +"px";
                     spanElement.style.left = blockquoteCoord.left+"px";
                  break;
    case "right-out" : spanElement.style.top = blockquoteCoord.top +"px";
                     spanElement.style.left = blockquoteCoord.right+"px";
                     break;
    case "bottom-out" : spanElement.style.top = blockquoteCoord.bottom +"px";
                     spanElement.style.left = blockquoteCoord.left+"px";
                     break;
    case "top-in" : spanElement.style.top = blockquoteCoord.top  +"px";
                     spanElement.style.left = blockquoteCoord.left+"px";
                     break;
    case "right-in" : spanElement.style.top = blockquoteCoord.top +"px";
                     spanElement.style.left = blockquoteCoord.right - spanElement.offsetWidth +"px";
                     break;
    case "bottom-in" : spanElement.style.top = blockquoteCoord.bottom - spanElement.offsetHeight +"px";
                     spanElement.style.left = blockquoteCoord.left+"px";   
                     break;
   }
  // console.log(spanElement.offsetHeight)
  // if (position == "top" ) {
  //   spanElement.style.top = blockquoteCoord.top - spanElement.offsetHeight +"px";
  //   spanElement.style.left = blockquoteCoord.left+"px";
  // }
  // if (position == "right" ) {
  //   spanElement.style.top = blockquoteCoord.top +"px";
  //   spanElement.style.left = blockquoteCoord.right +"px";
  // }
  // if (position == "bottom" ) {
  //   spanElement.style.top = blockquoteCoord.bottom +"px";
  //   spanElement.style.left = blockquoteCoord.left +"px";
  // }
  // console.log(blockquoteCoord)
}

showNote(blockquote, "top-out", "note top-out");
showNote(blockquote, "right-out", "note right-out");
showNote(blockquote, "bottom-out", "note bottom-out");
showNote(blockquote, "top-in", "note top-in");
showNote(blockquote, "right-in", "note right-in");
showNote(blockquote, "bottom-in", "note bottom-in");