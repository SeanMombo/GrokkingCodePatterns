///// https://leetcode.com/explore/learn/card/data-structure-tree/133/conclusion/995/

//unf

function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}


/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (!root) return [];
    
    const serial = [];
    const queue = [];
    queue.unshift(root)
    
    while(queue.length) {
        const n = queue.length;
        
        for(let i = 0; i < n; i ++) {
            const node = queue.pop();
            if (node) {
                serial.push(node.val);
                queue.unshift(node.left);
                queue.unshift(node.right);
            }
            else {
                serial.push(null)
            }
        }
    }
    return serial;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let root = new TreeNode(data[0]);
    for(let i = 0; i < data.length; i ++) {
        let left = i * 2 + 1;
        let right = left + 1;
        root.left = new TreeNode(data[left]);
        root.right = new TreeNode(data[right]);
        root = root.left;
    }
    return root
};


const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.right.left = new TreeNode(4);
tree.right.right = new TreeNode(5);

let s = serialize(tree);
console.log(deserialize(s));