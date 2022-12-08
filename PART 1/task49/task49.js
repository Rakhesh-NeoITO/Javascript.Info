let x = 1;

function func() {
  console.log(x); //cant access before initialization

  let x = 2;
}

func();