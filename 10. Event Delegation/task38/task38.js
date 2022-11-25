let tree = document.getElementById('tree')
console.log(tree)

tree.addEventListener ('click', function (event) {
  console.log(event.target);
  
  if (event.target.tagName = 'li' ){
    event.target.querySelector('ul').hidden = !event.target.querySelector('ul').hidden;
    //console.log(event.target)
  }


})