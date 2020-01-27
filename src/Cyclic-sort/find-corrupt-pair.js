



function find_corrupt_numbers(nums) {
    let i = 0;
    while( i < nums.length) {
        const j = nums[i] - 1;
        if (nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
        } else {
            i++;
        }
    }

    for(let i = 0; i < nums.length; i ++) {
        if (nums[i] !== i + 1) {
            return [nums[i], i + 1];
        }
    }
    return -1;
}

// [3, 1, 2, 3, 6, 4]


console.log(find_corrupt_numbers([3, 1, 2, 5, 2]));
console.log(find_corrupt_numbers([3, 1, 2, 3, 6, 4]));
