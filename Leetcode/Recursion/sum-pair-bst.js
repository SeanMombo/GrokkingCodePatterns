
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
 


// var findTarget = function(root, k) {
//     if (root === null) return false;
//     const hash = {};
    
//     function helper(root) {
//         if (!root) return;
        
//         hash[root.val] = root.val;
        
//         helper(root.left);
//         helper(root.right);
//     }
//     helper(root);

//     let result = false;
//     Object.keys(hash).forEach(key => {
//         const x = hash[key];
//         const compliment = k - x;
        
//         if (x !== compliment && hash[compliment]) 
//             result = true;
//     })
//     return result;
// };


var findTarget = function(root, k) {
    let hash = {};

    function traverseTree(root) {
        // At the end of tree and no match founded, return false
        if (!root) {
            return false;
        }

        const found = k - root.val;
        // If found is in the hash table, return true
        if (found in hash) return true;

        // If found is not in hash table, add it to hash table
        hash[root.val] = root.val;

        // Recurse
        return traverseTree(root.left) || traverseTree(root.right);
    }
    return traverseTree(root);
};

const tree = new TreeNode(2);
tree.left=  new TreeNode(1);
tree.right=  new TreeNode(3);
console.log(findTarget(tree, 4))




var twoSum = function(numbers, target) {
    let hash = {};
    for (let i = 0; i < numbers.length; i++) {
        let another = target - numbers[i];
        if (another in hash) {
            return [hash[another], i + 1];
        }
        hash[numbers[i]] = i + 1; 
    }
};
