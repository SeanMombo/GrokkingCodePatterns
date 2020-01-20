var setZeroes = function(matrix) {
    logMatrix(matrix);
    for(let i = 0; i < matrix.length; i ++) {
        for(let j = 0; j < matrix[i].length; j ++) {
            if (matrix[i][j] === 0) {
                if (i !== 0)
                    matrix[i][0] = '';
                if (j !== 0)
                    matrix[0][j] = '';
            }
        }
    }
    // console.log(matrix);
    // //search for f vertically
    // for(let i = 0; i < matrix.length; i ++) {
    //      //set row to 0
    //     if (matrix[i][0] === 'f') {
    //         for(let j = 0; j < matrix[i].length; j ++) {
    //             matrix[i][j] = 0;
    //         }
    //     }
    // }
    logMatrix(matrix);
    
    //search for f horizontally
    for(let i = 0; i < matrix[0].length; i ++) {
        //set col to 0
        if (matrix[0][i] === '') {
            for(let j = 0; j < matrix.length; j ++) {
                if (j == 0) 
                    matrix[j][i] = 0;
                
                if (j > 0 && matrix[j][i] != '')
                    matrix[j][i] = 0;
            }
            if (i === 0) 
                matrix[0][0] = ''
        }
    }
    let zero = false;
    for(let j = 0; j < matrix.length; j ++) {
        if (matrix[j][0] === '') {
            for(let i = 0; i < matrix[j].length; i ++) {
                matrix[j][i] = 0;
            }
        }
    }


    logMatrix(matrix);
    
};

const logMatrix = mat => {
    for(i in mat) {
        console.log(mat[i])
    }
    console.log('')
}
console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]));
//console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]));

[1,1,1]
[0,1,2]
