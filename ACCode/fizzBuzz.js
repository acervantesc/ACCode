let numFB = prompt("Ingrese número: ");


function fizzBuzz(numFB) {
  for (let i = 0; i <= numFB; i++) {
    if (i===0){
        console.log(i)}  
    else if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
  }

console.log(fizzBuzz(numFB));
