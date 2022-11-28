let thumb = document.body.querySelectorAll('.draggable');
console.log(document.body.getBoundingClientRect().height)
thumb.forEach(element => {
  element.onmousedown = function(event) {
    event.preventDefault();
    // console.log(event.clientX)
    // console.log(event.clientY)
    // console.log(element.getBoundingClientRect().left)
  
    let shiftX = event.clientX - element.getBoundingClientRect().left;
    let shiftY = event.clientY - element.getBoundingClientRect().top;
    //console.log(shiftX)
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  
    function onMouseMove(event) {
      let newLeft = event.clientX - document.body.getBoundingClientRect().left - shiftX ;
      let newTop = event.clientY - document.body.getBoundingClientRect().top - shiftY ;
      element.style.position = 'absolute';
      console.log(newLeft)
      if (newLeft < 0) {
        newLeft = 0;
      }
      let rightEdge = document.body.getBoundingClientRect().width - element.offsetWidth;
      if (newLeft > rightEdge) {
        newLeft = rightEdge;
      }
      if (newTop < 0) {
        newTop = 0;
      }
      let bottomEdge = document.body.getBoundingClientRect().height - element.offsetHeight;
      if (newTop > bottomEdge) {
        newTop = bottomEdge;
      }
      //console.log(document.documentElement.clientWidth)
  
      element.style.left = newLeft + 'px';
      element.style.top = newTop + 'px';
  
    }
  
    function onMouseUp() {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }
  
  };
  
  element.ondragstart = function() {
    return false;
  };
});
