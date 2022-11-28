let thumb = slider.querySelector('.thumb');

thumb.onmousedown = function(event) {
  event.preventDefault();
  console.log(event.clientX)
  console.log(thumb.getBoundingClientRect().left)

  let shiftX = event.clientX - thumb.getBoundingClientRect().left;
  let shiftY = event.clientY - thumb.getBoundingClientRect().top;
  console.log(shiftX)
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  function onMouseMove(event) {
    let newLeft = event.clientX - slider.getBoundingClientRect().left - shiftX ;
    let newTop = event.clientY - slider.getBoundingClientRect().top - shiftY ;
    if (newLeft < 0) {
      newLeft = 0;
    }
    let rightEdge = slider.offsetWidth - thumb.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }
    if (newTop < 0) {
      newTop = 0;
    }
    let bottomEdge = slider.offsetHeight - thumb.offsetHeight;
    if (newTop > bottomEdge) {
      newTop = bottomEdge;
    }

    thumb.style.left = newLeft + 'px';
    thumb.style.top = newTop + 'px';

  }

  function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
  }

};

thumb.ondragstart = function() {
  return false;
};