let liArray= document.querySelectorAll("li")
for(let i=0;i<liArray.length;i++){
    console.log(liArray[i].firstChild.data)
    console.log(liArray[i].getElementsByTagName('li').length)

}