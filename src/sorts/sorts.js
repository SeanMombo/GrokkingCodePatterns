const Deque = require('collections/deque');

//// BUBBLE 
const bubbleSort = arr => {
    let k = arr.length;
    for(let i = 1; i < k; i ++) {
        for(let j = 0; j < k - 1; j ++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}

//// INSERTION 
const insertionSort = arr => {
    let k = arr.length;
    for(let i = 1; i < k; i ++) {
       let j = i;
       while(j > 0 && arr[j-1] > arr[j]) {
           [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
           j --;
       }
    }
    return arr;
}

//// HEAP 
const heapSort = arr => {
    let len = arr.length;
    let i = Math.floor(len / 2 - 1);
    let k = len - 1;

    while(i >= 0) {
        heapify(arr, i, len);
        i--;
    }

    while(k >= 0){
        [arr[0], arr[k]] = [arr[k], arr[0]];
        heapify(arr, 0, k);
        k--;
    }
    return arr;
}
const heapify = (arr, i, length) => {
    let largest = i;
    let left = 2 * i + 1;
    let right = left + 1;

    if (left < length  && arr[left] > arr[largest])
        largest = left;

    if (right < length && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, largest, length);
    }
    return arr;
}

//// MERGE
const mergeSort = arr => {
    let k = arr.length;
    if (k <= 1) return arr;

    let middle = Math.floor(k/2);

    const left = arr.slice(0, middle);
    const right = arr.slice(middle); 

    return merge(
        mergeSort(left), mergeSort(right)
    );
}
const merge = (left, right) => {
    let result = [], leftIx = 0, rightIx = 0;

    while(leftIx < left.length && rightIx < right.length) {
        if (left[leftIx] < right[rightIx]) {
            result.push(left[leftIx]);
            leftIx ++;
        } else {
            result.push(right[rightIx]);
            rightIx ++;
        }
    }

    return result
        .concat(left.slice(leftIx))
        .concat(right.slice(rightIx));
}

//// SELECTION
const selectionSort = arr => {
    let k = arr.length;

    for(let i = 0; i < k-1; i ++) {
        let minIndex = i;

        for(let j = i+1; j < k; j ++) {
            if (arr[j] < arr[minIndex])
                minIndex = j;
        }

        if (minIndex != i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
    return arr;
}

//// QUICK
const quickSort = (arr, low=0, high=arr.length-1) => {
    let index = 0;
    if (arr.length > 1) {
        index = partition(arr, low, high);

        if (low < index - 1) 
            quickSort(arr, low, index - 1);
        if (index < high)
            quickSort(arr, index, high);
    }
    return arr;
}

const partition = (arr, low, high) => {
    let pivot = arr[Math.floor((low+high)/2)];
    let i = low, j = high;

    while(i <= j) {
        while(arr[i] < pivot) {
            i++;
        }
        while(arr[j] > pivot) {
            j--;
        }

        if(i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }
    
    return i;
}

const testAllSorts = (arr) => {
    console.log('Bubble Sort', bubbleSort(arr));
    console.log('Insert Sort', insertionSort(arr));
    console.log('  Heap Sort', heapSort(arr));
    console.log(' Merge Sort', mergeSort(arr));
    console.log('Select Sort', selectionSort(arr));
    console.log(' Quick Sort', quickSort(arr));
    
}
testAllSorts([9,4,8,2,3,1,7,6,5]);


[4,8,9,2,3,1,7,6,5]