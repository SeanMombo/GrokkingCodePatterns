/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
   
    people.sort();
    let i = 0,
        j = people.length - 1;
    let ans = 0;
    console.log(people)
    while (i <= j) {
        let pair = people[i] + people[j];
        
        if (pair <= limit) {
            ans++;
            i++;
            j--;
        } else if (pair > limit) {
            ans++;
            j--;
        }
    }
    
    return ans;
};

console.log(numRescueBoats([5,2,8,10], 50))

