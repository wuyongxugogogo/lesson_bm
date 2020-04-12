// 最长回文子串

// 暴力法  超出时间限制
// var longestPalindrome = function(s) {
//     if(!s || s.length < 2) return s;
//     let cur = '';
//     let max = '';
//     for(let i = 0; i < s.length; i++) {
//         for(let j = 0; j< s.length; j++) {
//             let str = s.substr(i,j+1);
//             if(isPalindrome(str) && str.length > max.length) max = str
//         }
//     }
//     return max;
// };
// const isPalindrome = function(s) {
//     let l = 0;
//     let r = s.length -1;
//     while(l < r) {
//         if(s[l] != s[r]) {
//             return false;
//         }
//         l++;
//         r--;
//     }
//     return true;
// }
// console.log(longestPalindrome('abababababa'))


// 中心扩展法
var longestPalindrome = function(s) {
    if(!s||s.length<2){
        return s
    }
    let start = 0 ,end = 0;
    let n = s.length;
    let centerExpend = (left,right) => {
        while(left>=0&&right<n&&s[left]==s[right]){
            left--;
            right++;
        }
        return right-left-1;
    }

    for(let i=0; i<s.length; i++){
        let len1 = centerExpend(i,i);
        let len2 = centerExpend(i,i+1);
        let maxLen = Math.max(len1,len2);
        if(maxLen > end - start){
            start = i - Math.floor((maxLen-1)/2);
            end = i + Math.floor(maxLen/2);
        }
    }
    return s.substring(start,end+1);
};

console.log(longestPalindrome('acdcbb'))