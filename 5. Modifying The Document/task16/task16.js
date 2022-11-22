let liArray= document.querySelectorAll("li")
for(let i=0;i<liArray.length;i++){
   let heading = liArray[i].firstChild.data;

//console.log(liArray[i].firstChild.data)
 if( liArray[i].childNodes.length !== 1){
    let a = document.createElement('ul')
    a.innerHTML = liArray[i].getElementsByTagName('li').length
    liArray[i].firstChild.after(a)
 }
   //console.log(a)
   
    
    

}