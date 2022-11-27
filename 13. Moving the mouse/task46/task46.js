let toolTip;
//let currSpeed = $('#elem').cursometer('getCurrentSpeed');
//console.log(speed)

document.addEventListener('mouseover', function (event) {

  console.log(event.target.id);
  if (event.target.id !== 'elem' ) return
  
    console.log(event)
    toolTip = document.createElement('span');
    toolTip.className = 'tooltip';
    toolTip.innerHTML = 'ToolTip';
    document.body.append(toolTip);

    let coords = event.target.getBoundingClientRect();

    let left = coords.left + (event.target.offsetWidth - toolTip.offsetWidth) / 2;
      if (left < 0) left = 0;

    let top = coords.top - toolTip.offsetHeight - 5;
      if (top < 0) {
        top = coords.top + event.target.offsetHeight + 5;
      }

      toolTip.style.left = left + 'px';
      toolTip.style.top = top + 'px';
  
})
document.onmouseout = function(event) {

  if (toolTip) {
    toolTip.remove();
    toolTip = null;
  }

};