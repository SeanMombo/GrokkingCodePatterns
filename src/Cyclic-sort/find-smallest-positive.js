


function find_first_missing_positive(nums) {
    let i = 0;
    let n = nums.length;
    while(i < nums.length) {
        const j = nums[i] - 1;

        if (i < n && j < n && i >= 0 && j >= 0 && nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
        } else {
            i++;
        }
    }
    
    for(let i = 0; i < nums.length; i ++) {
        if (nums[i] !== i+1) {
            return i+1;
        }
    }
    return -1;
}

console.log(find_first_missing_positive([-3, 1, 5, 4, 2]));
console.log(find_first_missing_positive([3, -2, 0, 1, 2]));
console.log(find_first_missing_positive([3, 2, 5, 1]));
console.log(find_first_missing_positive([1,2,3,4,5,6]));
