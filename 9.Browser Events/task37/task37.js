container.addEventListener('click', function(event){
  console.log(event.target.closest('.pane'))
  if (event.target.className != 'remove-button' ){
      return;
  }
  event.target.closest('.pane').remove();
})