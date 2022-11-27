let toolTip;

document.addEventListener('mouseover', function (event) {

  //console.log(event.target.tagName);
  let closestTooltip = event.target.closest('[data-tooltip]');
  console.log(closestTooltip.dataset.tooltip)
  if (!closestTooltip ) return
  
    //console.log(event)
    toolTip = document.createElement('span');
    toolTip.className = 'tooltip';
    toolTip.innerHTML = closestTooltip.dataset.tooltip;
    document.body.append(toolTip);
    let coords = closestTooltip.getBoundingClientRect();

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