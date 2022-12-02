function checkSpam(text) {
  let lowerText = text.toLowerCase();

  return lowerText.includes('viagra') || lowerText.includes('xxx')
}

console.log( checkSpam('buy ViAgRA now') );
console.log( checkSpam('free xxxxx') )
console.log( checkSpam("innocent rabbit") )