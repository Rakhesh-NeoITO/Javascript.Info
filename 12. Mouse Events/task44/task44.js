function showBackground(event) {
  console.log(event.target)

  if (event.target.tagName != "LI") return;

  if (event.ctrlKey || event.metaKey) {
    event.target.classList.toggle('selected')
  } else {
    let selected = ul.querySelectorAll('.selected');
      for(let element of selected) {
        element.classList.remove('selected');
      }
      event.target.classList.add('selected');
  }  
}