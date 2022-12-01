let view = document.getElementById('view')


view.addEventListener('click', function (){
  
  let input = document.createElement('input');
  input.className = 'input'
  input.value = view.innerHTML;
  view.replaceWith(input);
  input.focus();

  input.onblur = function() {
    view.innerHTML = input.value;
    input.replaceWith(view);
  }
  input.addEventListener('keydown', function (event) {
      if(event.code == 'ArrowUp'){
       console.log(event.code)
        
      }
  })

  console.log(input.value)


})

