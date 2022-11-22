// let a = true
// while(a){
//     let data = prompt("enter your item");
//     if(!data){
//     break;
//     a = false
//     } 
//     let li= document.createElement('li');
//     li.innerHTML= data
//     document.getElementById('list').append(li)
// }
let i = 1
while(i){
    let data = prompt("enter your item");
    if(!data){
    break;
    } 
    let li= document.createElement('li');
    li.innerHTML= data
    list.append(li)
}