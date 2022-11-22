let data = {
    "Fish": {
      "trout": {},
      "salmon": {}
    },
  
    "Tree": {
      "Huge": {
        "sequoia": {},
        "oak": {}
      },
      "Flowering": {
        "apple tree": {},
        "magnolia": {}
      }
    }
  };
//console.log(data["Fish"])
function createTree(container,data){
//  console.log(container)
// console.log(data)
 for(let element in data){
  //console.log(element)
    let li= document.createElement('li');
    li.innerHTML= element
    container.append(li)
    if(typeof data[element]==='object'){
        let ul = document.createElement('ul')
        container.append(ul)
        createTree(ul,data[element])
       }
 }
}
createTree(container,data)