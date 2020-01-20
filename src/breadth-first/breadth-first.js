const Deque = require('collections/deque'); //http://www.collectionsjs.com
//QUESTIONS
//INITIAL THOUGHTS
//BASIC EXAMPLE
//POTENTIAL DATA STRUCTURES
//PSEUDOCODE


class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  
  const traverse2 = function(root) {
    result = [];
    const q = new Deque();
    q.push(root)

    while(q.length > 0) {
        let levelSize = q.length;
        let currentLevel = [];

        for(i = 0; i < levelSize; i ++) {
            let currentNode = q.shift();
            currentLevel.push(currentNode.value);
            if (currentNode.left) q.push(currentNode.left);
            if (currentNode.right) q.push(currentNode.right);
        }
        result.unshift(currentLevel)
    }
    return result;
  };
  
  

const traverse3 = function(root) {
    result = [];
    const q = new Deque();
    q.push(root)

    let leftToRight = true;

    while(q.length > 0) {
        let levelSize = q.length;
        let currentLevel = [];

        for(i = 0; i < levelSize; i ++) {
            let currentNode = q.shift();
            if (leftToRight) {
                currentLevel.push(currentNode.value);
            } else {
                currentLevel.unshift(currentNode.value);
            }

            if (currentNode.left !== null) {
                q.push(currentNode.left);
            }
            if (currentNode.right !== null) {
                q.push(currentNode.right);
            }
        }
        result.push(currentLevel);
        leftToRight = !leftToRight;
    }

    return result;
};


const find_level_averages = function(root) {
    result = [];
    
    let queue = new Deque();
    queue.push(root);

    while(queue.length > 0) {
        let levelSize = queue.length;
        let tempArray = [];
        let num = 0;

        for(i = 0; i < levelSize; i ++) {
            let currentNode = queue.shift();
            tempArray.push(currentNode.value);
            num++;

            if (currentNode.left !== null) {
                queue.push(currentNode.left)
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right)
            }
        }
        result.push(tempArray.reduce((a,b) => {return a + b}, 0)/num);
    }

    return result;
};
  
  




const find_minimum_depth = function(root) {
    let minDepth = 1;
    let queue = new Deque();
    queue.push(root);

    while (queue.length > 0) {
        let levelSize = queue.length;

        for(i = 0; i < levelSize; i ++) { 
            let currentNode = queue.shift();

            if (currentNode.left === null && currentNode.right === null) {
                return minDepth;
            }
            if (currentNode.left !== null) {
                queue.push(currentNode.left)
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right)
            }
        }
        minDepth ++;
    }
    
    return -1;
};

  
const find_successor = function(root, key) {
    let queue = new Deque();
    queue.push(root);

    while(queue.length > 0) {
        let levelSize = queue.length;

        for(i = 0; i < levelSize; i ++) {
            let node = queue.shift();
            if (node.value == key) {
                if (i < levelSize-1) {
                    return queue.shift();
                } else {
                    return node.left;
                }
            }
            if (node.left !== null) {
                queue.push(node.left)
            }
            if (node.right !== null) {
                queue.push(node.right)
            }
        }
    }
};
  

var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
result = find_successor(root, 12)
if (result != null)
console.log(result.value)
result = find_successor(root, 9)
if (result != null)
console.log(result.value)
  