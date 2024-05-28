//c. Sum of all numbers in an array

//Using Anonymous Function:
let func = function () {
    
    let ar = [11, 2, 33, 4, 55]
    let sum = ar.reduce(function(a, b){
        return a + b;
    });
    console.log(sum);
  }
  func()

  // Using IIFE:
const myNums = [11,2,333,4,55];

var sum1 = myNums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
},0);

console.log(sum1)