//e. Return all the palindromes in an array.

//Using Anonymous function:
let isPalindrome = function () {
    var myArray = ['civic', 'racecar', 'honda', 'madam'];
    var arr = myArray.filter(function (c, d) {
      var palindrome = c.split('').reverse().join('');
      if (c == palindrome) {
        console.log(myArray[d]);
      }
    });
  }
  isPalindrome()