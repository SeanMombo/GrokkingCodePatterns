//// https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/

/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
var maxFreq = function(s, maxLetters, minSize, maxSize) {
    let freq = {};
    let uniques = 0;

    let i = 0;
    let results = [];
    let substr = [];

    for(let j = 0; j < s.length; j ++) {
        let c = s[j];
        if (!(c in freq))
        {
            freq[c] = 0;
        }
        freq[c] ++;
        substr.push(c);
        while(i < j) {
            if (Object.keys(freq).length > maxLetters) {
                results.push(substr);
            }

            
            let c = s[i];
            freq[c]--;
            if (freq[c] == 0)
                delete freq[c];
            i++;
            substr.shift()
        }
        
    }
    return results;
};


console.log(maxFreq("aababcaab",2,3,4));