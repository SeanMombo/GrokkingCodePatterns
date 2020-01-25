
const Heap = require('collections/heap'); //http://www.collectionsjs.com

function sort_character_by_frequency(str) {
    const freq = {};
    let i = 0;

    //populate hashmap with character frequencies
    while(i < str.length) {
        if(!(str[i] in freq)) freq[str[i]] = 0;
        freq[str[i]] ++;
        i++;
    }

    const maxHeap = new Heap([], null, ((a,b)=>a[0]-b[0]));

    Object.keys(freq).forEach(n => {
        maxHeap.push([freq[n], n]);
        // if we were limiting the size of the heap to target a specific K elements, we would do it here
    });

    let result = [];
    while(maxHeap.length) {
        const [freq, char] = maxHeap.pop();
        for(let j = 0; j < freq; j ++) {
            result.push(char);
        }
    }
    return result.join('');
}

console.log(`String after sorting characters by frequency: ${sort_character_by_frequency('Programming')}`);
console.log(`String after sorting characters by frequency: ${sort_character_by_frequency('abcbab')}`);
