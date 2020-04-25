// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:

// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 示例 2:

// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。

// 用第一个字符串 和 后面字符串挨个比较 
var longestCommonPrefix = function(strs) {
    if(strs.length == 0){
        return '';
    }
    let first = strs[0];
    for(let i=1; i<strs.length ;i++){
        const min = Math.min(first.length,strs[i].length);
        let j=0;
        for(; j<min ;j++){
            if(first[j]!=strs[i][j]){ 
                break;
            }
        }
        first = first.substr(0,j);
        if(first === ''){
            return first;
        }
    }
    return first;
};
console.log(longestCommonPrefix(["aa","a"]))
