
var findNthDigit = function(n) {
    let bp = 0;
    let num = 0;
    
    while(true) {
        num++;
        bp = Math.pow(10, num);
        if (n - (bp*num) > 0) {
            n-=(bp*num);
        } else break;
    }
    console.log(num, bp, n);

    let finalNum = Math.floor(n/num)*num;
    if (num > 1)
    finalNum += Math.pow(10, num-1);
    
    console.log(finalNum)
    let index = n % num;
    console.log(index)
    if (index === 0) {
        //console.log(finalNum.toString().split('')[bp-1])
        return finalNum.toString().split('')[num-1];
    } else {
        console.log(finalNum.toString().split(''))
        return finalNum.toString().split('')[index];
    }
};

console.log(findNthDigit(12));