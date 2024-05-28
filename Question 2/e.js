//e. Return all the palindromes in an array.
//Using ARROW Function:
Palindrome = (arr, n) => 
    {
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }
