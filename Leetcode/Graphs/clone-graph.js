// Definition for a Node.
function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
};

var cloneGraph = function(node) {
    const vis = {};
    
    function traverse(node) {
        let len = node.neighbors.length;
        if (len === 0) return node;
        
        const newNode = new Node(node.val);
        vis[node] = 1;
        
        
        for(let i = 0; i < len; i ++) {
            if (!(node in vis)) {
                traverse(node.neighbors[i])
            }
            newNode.neighbors.push()
        }
    }
    traverse(node);
    console.log(Object.keys(vis));
    return Object.keys(vis)[0];
};
