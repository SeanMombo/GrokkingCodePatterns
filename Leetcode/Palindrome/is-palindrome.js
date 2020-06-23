//https://leetcode.com/problems/valid-palindrome/

// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:
// Input: "A man, a plan, a canal: Panama"
// Output: true

// Example 2:
// Input: "race a car"
// Output: false

function stripChars(s) {
    return s;
}

// time = O(N)
// space = O(N) 
var isPalindrome = function(s) {
    s = s.replace(/[^0-9a-z]/gi, '');
    s = s.toLowerCase();

    function rec(s) {
        let n = s.length;
        if (n === 2 && s[0] === s[n-1]) return true;
        if (n === 1) {
            return true;
        }

        const s2 = s.slice(1, n-1);
        if (s[0] === s[n-1])
            return rec(s2)
    }

    const ans = rec(s);

    return ans ? true : false;
};

console.log(isPalindrome("Amanaplanacanalpanama"));

