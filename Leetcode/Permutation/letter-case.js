// https://leetcode.com/problems/letter-case-permutation/
// 784. Letter Case Permutation
// Easy

// Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.  Return a list of all possible strings we could create.

// Examples:
// Input: S = "a1b2"
// Output: ["a1b2", "a1B2", "A1b2", "A1B2"]

// Input: S = "3z4"
// Output: ["3z4", "3Z4"]

// Input: S = "12345"
// Output: ["12345"]
// Note:

// S will be a string with length between 1 and 12.
// S will consist only of letters or digits.
var letterCasePermutation = function(S) {

    const ans = [];

    function rec(res, i) {
        //base case
        if (res.length === S.length) {
            ans.push(res.join(''));
            return;
        } else {
            
            //check if letter
            if (S[i].toLowerCase() !== S[i].toUpperCase()) {
                res.push(S[i].toLowerCase())
                rec(res, i+1);
                res.pop();

                res.push(S[i].toUpperCase())
                rec(res, i+1);
                res.pop()
            } else {
                rec([...res, S[i]], i+1);
            }
        }
    }
    rec([], 0);
    return ans;
};

console.log(letterCasePermutation("a1b2"))