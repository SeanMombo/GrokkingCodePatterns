//// https://leetcode.com/problems/self-dividing-numbers/



var selfDividingNumbers = function(left, right) {
    let ans = [];
    
    for(let i = 0; i <= right; i ++) {
        let str = i.toString();
        let add = true;
        for (c in str) {

            if (Number(str[c]) == 0 || i % Number(str[c]) != 0) {
                add = false;
                break;
            }
        } 
        if (add)           
            ans.push(i);
    }
    return ans;
};


console.log(selfDividingNumbers(1,25))