function showImage(event) {
  let image = event.target.closest('a')
  console.log(image.href);
  console.log(image.title);

  if(!image) return;

  largeImg.src = image.href;
  largeImg.alt = image.title;

  event.preventDefault();

}