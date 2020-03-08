// 1004. Max Consecutive Ones III
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(arr, K) {
    let l = 0;
    let count = 0, numK = 0, ans = 0;
    
    for(let r = 0; r < arr.length; r++) {
        count += arr[r];
        if (arr[r] == 0) {
            numK++;
        }
        
        while(numK > K && l < arr.length) {
            count -= arr[l];
            if (arr[l] === 0) {
                numK--;
            }
            l++;
        }
        ans = Math.max(ans, count + numK);
    }
    return ans;
};
//......................[0,1,2,3,4,5,6,7,8,9, 0,1,2,3,4,5,6,7,8]
console.log(longestOnes(
    [1,1,1,0,0,0,1,1,1,1,0],
    2));