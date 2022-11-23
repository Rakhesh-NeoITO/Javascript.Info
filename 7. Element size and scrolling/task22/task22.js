//elem.style.height = `${elem.scrollHeight}px`
console.log("clientHeight : " + elem.clientHeight);
console.log("scrollHeight : " + elem.scrollHeight);
console.log("scrollTop : " + elem.scrollTop);
let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;
console.log(scrollBottom)