/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var first = m - 1;
    var second = n - 1;

    for (var i = m + n - 1; i >= 0; i--) {
        if (second < 0) {
          break;
        }

        if (nums1[first] > nums2[second]) {
            nums1[i] = nums1[first];
            first--;
        } else {
            nums1[i] = nums2[second];
            second--;
        }
        console.log(nums1,first,second)
    }
};

console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))