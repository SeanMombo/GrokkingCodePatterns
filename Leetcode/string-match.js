///// https://leetcode.com/problems/di-string-match/


class StringMatch {
    constructor() {
        this.result = [];
    }

    diStringMatch(S) {
        if (S.length === 0) return [];

        this.result[0] = 0;
        for(let i = 1; i < S.length; i ++) {
            let sPrev = S[i-1];
            let sCur = S[i];
            let rPrev = this.result[i-1];
            let rCur; // = ?

            if (sPrev == 'I') {
                this.result.push(rPrev + 1);
            } else {
                this.result.push(rPrev - 1);
            }
        }
        return this.result;
    }

}

let stringMatch = new StringMatch();
let S = 'IDID';
console.log(stringMatch.diStringMatch(S));
// Input: "IDID"
// Output: [0,4,1,3,2]