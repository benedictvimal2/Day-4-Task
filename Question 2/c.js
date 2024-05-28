//c. Sum of all numbers in an array.
//Using ARROW Function:
var a=[1,2,33,4,55,6,77,8,9];
var sum=0;
let ghi=(a)=>
{
   for(let i=0; i<a.length; i++)
   {
     sum=sum+a[i];
   }
   return sum;
}
console.log(ghi(a));