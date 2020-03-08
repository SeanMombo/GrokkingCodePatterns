// https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/
//801. Minimum Swaps To Make Sequences Increasing

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minSwap = function(A, B) {
    let minSwaps = Infinity;
    
    function swap(i) {
        [A[i], B[i]] = [B[i], A[i]];
    }
    
    function helper(swaps, i, prevA, prevB) {
        if (i >= A.length) {
            minSwaps = Math.min(minSwaps, swaps);
            return;
        }
        
        if (A[i] <= prevA || B[i] <= prevB) {
            swap(i);
            helper(swaps + 1, i + 1, A[i], B[i]);
            swap(i);
        } else {
            helper(swaps, i + 1, A[i], B[i]);

            swap(i);
            helper(swaps + 1, i + 1, A[i], B[i]);
            swap(i);
        }
            
    }
    helper(0, 0, -1, -1);
    return minSwaps;
};

console.log(minSwap(
    [0,4,4,5,9],
    [0,1,6,8,10]));