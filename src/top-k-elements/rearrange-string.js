const Heap = require('collections/heap'); //http://www.collectionsjs.com


function rearrange_string(str) {
    let arr = str.split('');
    let freq = {};

    arr.forEach(num => {
        if (!(num in freq)) freq[num] = 0;
        freq[num]++;
    });

    const maxHeap = new Heap([], null, ((a, b) => a[0] - b[0]));

    Object.keys(freq).forEach(key => {
        maxHeap.push([freq[key], key]);
    });

    let newStr = [];
    let prev = null;
    let i = 0;
    while(maxHeap.length) {
        let [freq, key] = maxHeap.pop();
        newStr.push(key);

        if (freq > 0) {
            freq--;

            if (prev !== null) {
                maxHeap.push(prev);
            }
            prev = [freq, key]
        } else {
            prev = null;
        }
        
    }
    return newStr.join('');
}


console.log(`Rearranged string:  ${rearrange_string('aappp')}`);
console.log(`Rearranged string:  ${rearrange_string('Programming')}`);
console.log(`Rearranged string:  ${rearrange_string('aapa')}`);




