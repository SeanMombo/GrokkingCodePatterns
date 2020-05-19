

const str = "abrkaabcdefghijjxxx" //10

const longestNonRepeatingSubstring = (str) => {
    const freq = {};
    let maxLength = -Infinity;
    let l = 0;

    for(let r = 0; r < str.length; r ++) {
        const char = str[r];
        if (!(char in freq)) {
            freq[char] = 0;
        } 
        freq[char]++;

        if (freq[char] > 1) {
    
            while(freq[char] > 1 && l < str.length) {
                const lChar = str[l];
                freq[lChar]--;
                if (freq[lChar] == 0)
                    delete freq[lChar];
                l++
            }
        } 
        maxLength = Math.max(maxLength, r - l + 1);
    }

    return maxLength;
}

console.log(longestNonRepeatingSubstring(str))