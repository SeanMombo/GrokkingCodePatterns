const find_subsets = function(nums) {
    subsets = [];
    subsets.push([]);
    nums.sort();
    let start = 0;
    let end = 0;
    for(let i = 0; i < nums.length; i ++) {
      let n = subsets.length;
      let num = nums[i];
      start = 0;
  
      if (i > 0 && num === nums[i-1]) {
        start = end + 1;
      }
      end = subsets.length - 1;
      for(let j = start; j < end + 1; j ++) {
        let set = subsets[j].slice(0);
        set.push(num);
        subsets.push(set);
      }
      
    }
    return subsets;
  };
  
  console.log('Here is the list of subsets: ');
  let result = find_subsets([1, 3, 3]);
  result.forEach((subset) => {
    console.log(subset);
  });
  
  console.log('Here is the list of subsets: ');
  result = find_subsets([1, 5, 3, 3]);
  result.forEach((subset) => {
    console.log(subset);
  });