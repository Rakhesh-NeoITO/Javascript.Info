function truncate(str, maxlength) {
  let length = str.length;
  console.log(maxlength)
  if(length > maxlength){
    return(str.slice(0,maxlength-1) + '...' )
  }
  else {
    return str
  }
}

console.log( truncate("What I'd like to tell on this topic is:", 20) )
console.log( truncate("Hi everyone!", 20) )
// str[0].toUpperCase() + str.slice(1)