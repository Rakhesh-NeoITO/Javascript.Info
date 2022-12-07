let salaries = {
  "John": 400,
  "Pete": 300,
  "Mary": 150
};

function topSalary(salaries) {

  let maxSalary = 0;
  let maxName = null;

  for(const [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      maxName = name;
    }
  }

  return maxName + ':'+ maxSalary;
}

console.log( topSalary(salaries) );