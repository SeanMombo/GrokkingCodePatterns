const rand7 = function() {
    return Math.floor(Math.random() * 7);
}

var rand10 = function() {
    let ratio = 10/7;
    
    return Math.floor(ratio * rand7());
};

let r = {};
for(i = 0; i < 10000; i ++) {
    let n = rand10();
    if(!(n in r))
        r[n] = 0;
    r[n] ++;
}

console.log(Object.values(r))