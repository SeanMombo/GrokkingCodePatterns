var longestPalindrome = function(s) {
    const n = s.length;
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
    let res = "";
    
    let num = 0;
    while (num < n) {
        let i = 0, j = num;
        
        while(j < n) {
            if (i === j) {
                dp[i][j] = 1;
            } else if (s[i] === s[j]) {
                dp[i][j] = dp[i+1][j-1];
            }
            
            if (dp[i][j] && j-i + 1 > res.length) {
                res = s.substring(i, j+1)
            }      
            i++;
            j++;
        }
        num++;
    }
    
    return res;
};
console.log(longestPalindrome("babad"))