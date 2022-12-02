let sources = [
  "https://en.js.cx/images-load/1.jpg",
  "https://en.js.cx/images-load/2.jpg",
  "https://en.js.cx/images-load/3.jpg"
];

function preLoadImages(sources, callback) {
  let counter = 1;

  function onLoad() {
    counter++
    if(counter == sources.length) {
      callback();
    }
  }

  sources.forEach(element => {
    let imageElem = document.createElement('img');
    imageElem.src = element;
    imageElem.onload = onLoad();
  });
}

function loaded() {
  console.log('images loaded');
}

preLoadImages( sources, loaded);