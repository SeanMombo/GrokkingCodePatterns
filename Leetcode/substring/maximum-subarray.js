//// https://leetcode.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {

    let curSum = nums[0];
    let maxSum = curSum;
    
    for(i = 1; i < nums.length; i ++) {
        curSum += nums[i];
        if (nums[i] > curSum) {
            curSum = nums[i];
        } 
        if (curSum > maxSum)
            maxSum = curSum
    }
    return maxSum;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
