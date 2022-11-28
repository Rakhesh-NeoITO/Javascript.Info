let pictures = document.body.querySelectorAll('img');


document.addEventListener('scroll', function() {

  pictures.forEach(picture => {
  
    if( picture.getBoundingClientRect().top < 600){
      //console.log(scrollY,picture.getBoundingClientRect().top);
 
      setTimeout( () => {
        picture.src = picture.dataset.src
      }, 1000);
      //console.log(picture.getBoundingClientRect().top)
      //console.log(scrollY)
    }
    else {
      picture.src = ''
    }
    //console.log(scrollY)
  });

})
//scrollY < document.documentElement.clientHeight