const max_sub_array_of_size_k = function(k, arr) {

    let results = [];
    let windowStart = 0;
    let windowSum = 0;

    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];

        if (windowEnd >= k-1) {
            results.push(windowSum);
            windowSum -= arr[windowStart]
            windowStart++;
        }
    }

    return Math.max.apply(null, results);
};



const smallest_subarray_with_given_sum = function(s, arr) {

    let sumW = 0;
    let minLength = Infinity;
    let startW = 0;
  
    for( let endW = 0; endW < arr.length; endW ++) {
        sumW += arr[endW];

        while (sumW >= s) {
            minLength = Math.min(minLength, endW - startW + 1)
            sumW -= arr[startW];
            startW ++;
        }
    }
  
    if (minLength === Infinity) {
        return 0;
    }
    return minLength;
  };
  

const longest_substring_with_k_distinct = function(str, k) {
    let windowStart = 0;
    let maxLength = 0;
    let charFreq = {};

    for(let windowEnd = 0; windowEnd < str.length; windowEnd ++) {
        const rightChar = str[windowEnd];
        if (!(rightChar in charFreq)) {
            charFreq[rightChar] = 0;
        }
        charFreq[rightChar] += 1;

        while (Object.keys(charFreq).length > k) {
            const leftChar = str[windowStart];
            charFreq[leftChar] -= 1;

            if (charFreq[leftChar] === 0) {
                delete charFreq[leftChar]
            }
            windowStart++;
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
  
    return maxLength;
};

const fruits_into_baskets = function(fruits) {

    let windowStart = 0;
    let charFreq = {};
    let maxFruits = -1;

    for( let windowEnd = 0; windowEnd < fruits.length; windowEnd ++) {
        const rightChar = fruits[windowEnd];
        if (!(rightChar in charFreq)) {
            charFreq[rightChar] = 0;
        }
        charFreq[rightChar] += 1;

        while (Object.keys(charFreq).length > 2) {
            const leftChar = fruits[windowStart];
            charFreq[leftChar]--;
            if (charFreq[leftChar] === 0) {
                delete charFreq[leftChar];
            }
            windowStart++;
        }

        maxFruits = Math.max(maxFruits, windowEnd - windowStart + 1);
    }

    return maxFruits;
};


const non_repeat_substring = function(str) {
    let windowStart = 0;
    let charFreq = {};
let maxLength = 0;

    for (let windowEnd = 0; windowEnd < str.length; windowEnd ++) {
        const rightChar = str[windowEnd];
        if (!(rightChar in charFreq)) {
            charFreq[rightChar] = 0;
        }
        charFreq[rightChar] ++;
        
        while(Object.values(charFreq).some(val => val > 1)) {
            const leftChar = str[windowStart]
            charFreq[leftChar] --;
            if (charFreq[leftChar] === 0) {
                delete charFreq[leftChar];
            }
            windowStart ++;
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
};


const length_of_longest_substring = function(str, k) {
    let windowStart = 0;
    let maxLength = 0;
    let numMaxRepeatingChar = 0
    let charFreq = {};

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        if (!(rightChar in charFreq))
            charFreq[rightChar] = 0;
        charFreq[rightChar] ++;

        numMaxRepeatingChar = Math.max(numMaxRepeatingChar, charFreq[rightChar]);

        if ((windowEnd - windowStart + 1 - numMaxRepeatingChar) > k) {
            const leftChar = str[windowStart]
            charFreq[leftChar] --;
            windowStart ++;
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    
    return maxLength;
};


const length_of_longest_substring_ones = function(arr, k) {
    let windowStart = 0;
    let maxLength = 0;
    let charFreq = {};
    let numOnes = 0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        const rightChar = arr[windowEnd];
        if (!(rightChar in charFreq))
            charFreq[rightChar] = 0;
        charFreq[rightChar] ++;

        numOnes = charFreq[1];

        if ((windowEnd - windowStart + 1 - numOnes) > k) {
            const leftChar = arr[windowStart];
            charFreq[leftChar] --;
            windowStart++;
        }

        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }

    return maxLength;
};

const find_permutation = function(str, pattern) {
    let windowStart = 0;
    let k = pattern.length;
    let charFreq = {};
    let patternFreq = {};

    [...pattern].forEach(el => {
        if (!(el in patternFreq))
            patternFreq[el] = 0;
        patternFreq[el] ++;
    })

    for (let windowEnd = 0; windowEnd < str.length; windowEnd ++) {
        const rightChar = str[windowEnd];
        if (!(rightChar in charFreq))
            charFreq[rightChar] = 0;
        charFreq[rightChar] ++;

        if (windowEnd - windowStart + 1 > k) {
            const leftChar = str[windowStart];
            charFreq[leftChar]--;
            if (charFreq[leftChar] === 0)
                delete charFreq[leftChar]
            windowStart++;
        }

        let compareFreq = Object.keys(patternFreq).every(el => {
            return charFreq[el] == patternFreq[el];
        })
        if (compareFreq) {
            return true;
        }
    }

    return false;
};

const find_string_anagrams = function(str, pattern) {
    let results = [];

    let windowStart = 0;
    let k = pattern.length;
    let charFreq = {};
    let patternFreq = {};

    [...pattern].forEach(el => {
        if (!(el in patternFreq))
            patternFreq[el] = 0;
        patternFreq[el] ++;
    })

    for (let windowEnd = 0; windowEnd < str.length; windowEnd ++) {
        const rightChar = str[windowEnd];
        if (!(rightChar in charFreq))
            charFreq[rightChar] = 0;
        charFreq[rightChar] ++;

        if (windowEnd - windowStart + 1 > k) {
            const leftChar = str[windowStart];
            charFreq[leftChar]--;
            if (charFreq[leftChar] === 0)
                delete charFreq[leftChar]
            windowStart++;
        }

        let compareFreq = Object.keys(patternFreq).every(el => {
            return charFreq[el] == patternFreq[el];
        })
        if (compareFreq) {
            results.push(windowStart);
        }
    }

    return results;
};


const find_substring = function(str, pattern) {
    let minStr = '';
    let windowStart = 0;

    let charFreq = {};
    let patternFreq = {};

    [...pattern].forEach(el => {
        if (!(el in patternFreq))
            patternFreq[el] = 0;
        patternFreq[el] ++;
    })

    for (let windowEnd = 0; windowEnd < str.length; windowEnd ++) {
        const rightChar = str[windowEnd];
        if (!(rightChar in charFreq))
            charFreq[rightChar] = 0;
        charFreq[rightChar] ++;
 
        while (Object.keys(patternFreq).every( el => {
            return charFreq[el] >= patternFreq[el];
        })) {

            const newStr = str.slice(windowStart, windowEnd + 1);
            minStr = newStr.length < minStr.length ? newStr : minStr;
            if (minStr === '') minStr = newStr;

            const leftChar = str[windowStart];
            charFreq[leftChar] --;
            windowStart++;
        }
    }

    return minStr;
};


const find_word_concatenation = function(str, words) {
    result_indices = [];
    
    return result_indices;
};