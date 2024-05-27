//a. Using Anonymous Function
let arr=[0,1,2,3,4,5,6,7,8,9];

let odd = function () {
  let odd= arr.filter(num => num %2 ==1)
console.log(odd)
}
odd()

// Using IIFE
let a=[0,1,2,3,4,5,6,7,8,9];

(function ()  {

  let odd2= a.filter(num => num %2 ==1);
console.log(odd2)

  })();