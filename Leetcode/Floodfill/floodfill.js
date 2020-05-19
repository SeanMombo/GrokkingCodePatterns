

function recursiveFloodFill(img, r, c, col, newCol) {

    function neighbours(r, c) {
        return [[r-1, c], [r+1, c], [r, c-1], [r, c+1]];
    }
    function key(r,c) {
        return `${r}-${c}`;
    }
    
    const visited = {};
    const numCol = img[0].length;
    const numRow = img.length;

    function rec(r, c) {
        if (r < 0 || r >= numRow) return;
        if (c < 0 || c >= numCol) return;
        if (visited[key(r,c)]) return;
        if (img[r][c] != col) return;

        img[r][c] = newCol;
        visited[key(r,c)] = 1;

        const moves = neighbours(r, c);

        for (move of moves) {
            rec(move[0], move[1]);
        }
    }
    rec(r, c);
    return img; 
}

// Flood-fill (node, target-color, replacement-color):
//   1. If target-color is equal to replacement-color, return.
//   2. If color of node is not equal to target-color, return.
//   3. Set the color of node to replacement-color.
//   4. Set Q to the empty queue.
//   5. Add node to the end of Q.
//   6. While Q is not empty:
//   7.     Set n equal to the first element of Q.
//   8.     Remove first element from Q.
//   9.     If the color of the node to the west of n is target-color,
//              set the color of that node to replacement-color and add that node to the end of Q.
//  10.     If the color of the node to the east of n is target-color,
//              set the color of that node to replacement-color and add that node to the end of Q.
//  11.     If the color of the node to the north of n is target-color,
//              set the color of that node to replacement-color and add that node to the end of Q.
//  12.     If the color of the node to the south of n is target-color,
//              set the color of that node to replacement-color and add that node to the end of Q.
//  13. Continue looping until Q is exhausted.
//  14. Return.

function iterativeFloodFill(img, r, c, col, newCol) {
    //// Helpers
    const numRows = img.length;
    const numCols = img[0].length;
    const visited = Array(numRows).fill().map(() => Array(numCols));

    function updateNeighbour(r, c) {
        if (r < 0 || r >= numRows || c < 0 || c >= numCols) return -1;
        if (img[r][c] === col) {
            img[r][c] = newCol;
            queue.unshift([r, c]);
            visited[r][c] = 1;
        }
    }

    //// Iterative algorithm
    if (img[r][c] === newCol) return;
    if (img[r][c]  !== col) return;
    img[r][c] = newCol;

    const queue = [];
    queue.unshift([r, c]);

    while(queue.length) {
        const [rCur, cCur] = queue.pop();
        if (visited[rCur, cCur] === 1) continue;
        updateNeighbour(rCur-1, cCur);
        updateNeighbour(rCur+1, cCur);
        updateNeighbour(rCur, cCur+1);
        updateNeighbour(rCur, cCur-1);
    }
    return img;
}
      

function printArray(arr) {
    for(row of arr) {
        console.log(row.join())
    }
    console.log()
}

let img = [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 2, 0],
    [1, 0, 0, 1, 0, 2, 1, 1],
    [1, 2, 2, 2, 2, 0, 1, 0],
    [1, 1, 1, 2, 2, 0, 1, 0],
    [1, 1, 1, 2, 2, 2, 2, 0],
    [1, 1, 1, 1, 1, 2, 1, 1],
    [2, 2, 1, 1, 1, 2, 2, 1],
    ];

printArray(recursiveFloodFill(img, 0, 0, 1, '-'));

img = [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 2, 0],
    [1, 0, 0, 1, 0, 2, 1, 1],
    [1, 2, 2, 2, 2, 0, 1, 0],
    [1, 1, 1, 2, 2, 0, 1, 0],
    [1, 1, 1, 2, 2, 2, 2, 0],
    [1, 1, 1, 1, 1, 2, 1, 1],
    [2, 2, 1, 1, 1, 2, 2, 1],
    ];
printArray(iterativeFloodFill(img, 0, 0, 1, '-'));