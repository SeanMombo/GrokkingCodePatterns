//https://leetcode.com/problems/video-stitching/

/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
var videoStitching = function(clips, T) {
    clips.sort((a,b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    let i = 0;
    let end = 0;
    let numClips = 0;
    
    while(i < clips.length && end < T) {
        if (clips[i][0] > end) return -1;
        
        let tempMax = 0;
        while(i < clips.length && clips[i][0] <= end) {
            tempMax = Math.max(tempMax, clips[i][1]);
            i++;
        }
        end = tempMax;
        numClips++;
        
    }
    if (end >= T) return numClips;
    else return -1;
};

console.log(videoStitching([[0,4],[2,8]],
    5))