// let showbutton = document.getElementById('showbutton');
// let promptDiv = document.getElementById('promptDiv');
// let inputForm = document.getElementById('prompt-form');
// let cancelButton = document.getElementById('cancelButton');

// showbutton.addEventListener('click', showPrompt);

// function showPrompt() {
//   promptDiv.classList.toggle("promptDiv");
//   document.body.style.overflowY = 'hidden';
//   let inputText =document.getElementById('inputText')
//   inputText.focus()
//   promptDiv.stopPropagation() 
// }

// inputForm.addEventListener('submit', function (event) {
//     let inputText =document.getElementById('inputText')
//     if (inputText.value == '') {
//       event.preventDefault();
//       alert('enter any value');
//     } else { 
//       alert(inputText.value);
//       document.body.style.overflowY = '';
//     }
// })

// cancelButton.addEventListener('click', function () {
//   if(inputText.value == ''){
//     alert('you entered null');
//     promptDiv.classList.toggle("promptDiv");
//     document.body.style.overflowY = '';
//   }
// })

document.getElementById('show-button').onclick = function() {
  showPrompt('Enter something<br>....smart :)', function(value) {
    alert('you entered :' + value)
  })
}

function showPrompt(text, callback) {
  let container = document.getElementById('prompt-form-container');
  let form = document.getElementById('prompt-form');
  document.getElementById('prompt-message').innerHTML = text;
  form.text.value = '';
  container.style.display = 'flex';
  form.text.focus();
  showCover();

  function complete(value) {
    hideCover();
    container.style.display = 'none';
    document.onkeydown = null;
    callback(value)
  }

  form.onsubmit = function() {
    let value = form.text.value;
    if(value == '') return false;

    complete(value);
    return false
  }

  form.cancel.onclick = function() {
      complete(null);
  }

  document.onkeydown = function(event) {
    if(event.key == 'Escape') complete(null);
  }

  let firstElem = form.elements[0];
  let lastElem = form.elements[form.elements.length - 1];

  firstElem.onkeydown = function(event) {
    if(event.key == 'Tab' && event.shiftKey){
      lastElem.focus();
      return false;
    }
  }

  lastElem.onkeydown = function(event) {
    if(event.key == 'Tab' && !event.shiftKey){
      firstElem.focus();
      return false;
    }
  }

}

function showCover() {
  let coverDiv = document.createElement('div');
  coverDiv.id = 'cover-div';
  document.body.style.overflowY = 'hidden';
  document.body.append(coverDiv);
}

function hideCover() {
  document.getElementById('cover-div').remove();
  document.body.style.overflowY = '';
}