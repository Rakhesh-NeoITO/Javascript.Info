let anchor = document.querySelectorAll('a')
console.log(anchor)

for(let i = 0; i < anchor.length; i++){
    // console.log(anchor[i])
    if(!anchor[i].getAttribute('href')){
        console.log(anchor[i])
    }else{
        if(anchor[i].getAttribute('href').includes('://')){
            anchor[i].style.color="orange"
            if(anchor[i].getAttribute('href').startsWith('http://internal.com')){
                anchor[i].style.color=''
            }
        }
    }
    
    
}