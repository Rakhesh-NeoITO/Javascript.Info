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
  // console.log(spanElement.offsetHeight)
  if (position == "top" ) {
    spanElement.style.top = blockquoteCoord.top - spanElement.offsetHeight +"px";
    spanElement.style.left = blockquoteCoord.left+"px";
  }
  if (position == "right" ) {
    spanElement.style.top = blockquoteCoord.top +"px";
    spanElement.style.left = blockquoteCoord.right +"px";
  }
  if (position == "bottom" ) {
    spanElement.style.top = blockquoteCoord.bottom +"px";
    spanElement.style.left = blockquoteCoord.left +"px";
  }
  // console.log(blockquoteCoord)
}

showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note right");
showNote(blockquote, "bottom", "note bottom");