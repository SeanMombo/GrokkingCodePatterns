const find_subsets = function(nums) {
    subsets = [];
    subsets.push([]);
    for(let i = 0; i < nums.length; i ++) {
  
      let n = subsets.length;
      for(let j = 0; j < n; j ++) {
        let set = subsets[j].slice(0);
        set.push(nums[i]);
        subsets.push(set);
      }
  
    }
    return subsets;
  };


  
console.log('Here is the list of subsets: ');
let result = find_subsets([1, 3]);
result.forEach((subset) => {
  console.log(subset);
});

console.log('Here is the list of subsets: ');
result = find_subsets([1, 5, 3]);
result.forEach((subset) => {
  console.log(subset);
});