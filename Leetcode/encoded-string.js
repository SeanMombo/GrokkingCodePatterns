
const isChar = (c) => {
    if (c.toUpperCase() === c) {
        return false;
    } else {
        return true;
    }
}


var decodeAtIndex = function(S, K) {
    //variables 
    //output string
    let output = "";
    
    //loop
    for (let i = 0; i < S.length; i ++) {
        let cur = S[i];
        if (isChar(cur)) {
            output += cur;
        } else {
            let curString = output;
            
            //loop digit number of times.
            for (let j = 0; j < cur-1; j ++) {

                output += curString;
            }
        }

    }
    
    return output[K-1];
};

console.log(decodeAtIndex("a2345678999999999999999",1));