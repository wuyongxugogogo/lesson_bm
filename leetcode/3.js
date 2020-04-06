// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

var lengthOfLongestSubstring = function(s) {
    let len = 0;
    let longestString = ''; //用来保存当前最长字符串
    let curStr = ''; //用来保存当前字符串

    for(let i = 0; i < s.length; i++){
        if(!curStr.includes(s[i])){
            curStr += s[i]
            if(curStr.length > longestString.length){
                longestString = curStr;
                len = longestString.length;
            }
        }else{
            curStr += s[i];
            let index = curStr.indexOf(s[i]);
            curStr = curStr.slice(index+1);
        }
    }

    return len
};
console.log(lengthOfLongestSubstring('abcabcbb'));