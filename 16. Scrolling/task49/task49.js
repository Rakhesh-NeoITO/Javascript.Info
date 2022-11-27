function endless() {
 console.log("first")
 while(true) {
  let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
  console.log(document.documentElement.clientHeight)
  console.log(windowRelativeBottom)
  if (windowRelativeBottom > document.documentElement.clientHeight +1) break;
  document.body.insertAdjacentHTML("beforeend", `<p>Date: ${new Date()}</p>`);
}
}

window.addEventListener('scroll', endless);

endless();