/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    
    let l = 0;
    let r = S.length - 1;
    S = S.split('');
    
    while(l < r) {
        
        if (!(isLetter(S[l]))) {
            l++;
        }
        else if (!(isLetter(S[r]))) { 
            r--;
        } else {            
            [S[l], S[r]] = [S[r], S[l]];
            l++;
            r--;
        }
    }
    return S.join('');
};
    
const isLetter = (c) => {
    return c.toLowerCase() != c.toUpperCase();
}

console.log(reverseOnlyLetters("a-bC-dEf-ghIj"));
console.log(reverseOnlyLetters("7_28]"));


