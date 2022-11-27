let numbers = document.getElementById('numbers')
console.log(numbers)
for (let i = 0; i < 200; i++){
  numbers.innerHTML += i + '<br>'
}

window.addEventListener('scroll', function() {
  arrow.hidden = (this.scrollY < document.documentElement.clientHeight);
});

arrow.onclick = function() {
  window.scrollTo(scrollY, 0);

};