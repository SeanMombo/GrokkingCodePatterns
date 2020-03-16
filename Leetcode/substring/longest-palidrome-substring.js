/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const n = s.length;
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
    let maxLen = 1;
    let start = 0;
    
    let num = 0;
    while (num < n) {
        let i = 0, j = num;
        
        while(j < n) {
            if (i === j) {
                dp[i][j] = 1;
            } else if (s[i] === s[j] && dp[i+1][j-1]) {
                dp[i][j] = dp[i+1][j-1];
                if (j-i + 1 > maxLen) {
                    maxLen = j-i+1;
                    start = i;
                    console.log(dp)
                }
            }
            i++;
            j++;
        }
        num++;
    }
    
    return s.substring(start, start + maxLen)
};


console.log(longestPalindrome("abcda"))