document.onclick = function(e) { // shows click coordinates
  coords.innerHTML = e.clientX + ':' + e.clientY;
};

let a = field.clientLeft;
console.log(a);
let b = field.getBoundingClientRect();
console.log("top-left corner:", b.left, b.top);
console.log("bottom-right corner:", b.right, b.bottom);
console.log("top-inner corner :", b.left + field.clientLeft, b.top + field.clientTop );
console.log("bottom-inner corner :", field.clientWidth + b.left + field.clientLeft, field.clientHeight + b.top + field.clientTop )