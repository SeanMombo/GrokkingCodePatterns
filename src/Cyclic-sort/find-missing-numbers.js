
function cyclic_sort(nums) {
    let i = 0;
    while (i < nums.length) {
        const j = nums[i] - 1;
        if (nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        } else {
            i ++;
        }
    }
    return nums;
}



function find_missing_number(nums) {
    let i = 0;
    let n = nums.length;
    while(i < n) {
        let j = nums[i];

        if (nums[i] < n && nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
        } else {
            i++;
        }
    }

    for(let i = 0; i < n; i ++) {
        if (nums[i] !== i) {
            return i;
        }
    }
    return nums
}

console.log(find_missing_number([4, 0, 3, 1]));
console.log(find_missing_number([8, 3, 5, 2, 4, 6, 0, 1, 9, 10]));