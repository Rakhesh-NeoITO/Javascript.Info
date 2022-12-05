// function calculate(text) {
//  console.log(text);
//  let a =  text.split(' ');
//  let firstNum = parseInt(a[0]);
//  let operator = a[1];
//  let secondNum = parseInt(a[2]);

//  switch(operator) {
//   case '+': console.log(firstNum + secondNum);
//   break;
//   case '-': console.log(firstNum - secondNum);
//   break;
//   case '*': console.log(firstNum * secondNum);
//   break;
//   case '/': console.log(firstNum / secondNum);
//   break;
//   case '%': console.log(firstNum % secondNum);
//  }
// }

function Calculator(str) {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };
  console.log(this.methods)

   function calculate(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };
  
  function addMethod(name, func) {
    this.methods[name] = func;
  };
  addMethod("*", (a, b) => a * b);
  addMethod("/", (a, b) => a / b);
  addMethod("**", (a, b) => a ** b);

  console.log(calculate( "3 + 7" ));
  console.log(calculate( "4 ** 2" ));

}

Calculator();
