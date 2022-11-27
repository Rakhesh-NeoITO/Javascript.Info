function runOnKeys(func, ...codes) {
  let pressed = new Set();
 console.log(pressed)
  document.addEventListener('keydown', function(event) {
    pressed.add(event.code);
    console.log(pressed)

    for (let code of codes) { 
      if (!pressed.has(code)) {
        return;
      }
    }
    
    func();
    console.log(pressed)
    pressed.clear();
  });

  document.addEventListener('keyup', function(event) {
    pressed.delete(event.code);
  });

}

runOnKeys(
  () => alert("Hello!"),
  "KeyQ",
  "KeyW"
);