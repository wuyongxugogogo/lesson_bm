// 打乱一个没有重复元素的数组。


/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.arr = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.arr
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let arr1 = [...this.arr];
    let len = arr1.length;
    for(let i = 0; i < len; i ++){
        let idx = Math.floor(Math.random() * (len-i));
        [arr1[len-i-1],arr1[idx]] = [arr1[idx],arr1[len-i-1]]
    }
    return arr1
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */



//  var obj = new Solution([[1,2],5,3])
//  var param_1 = obj.reset()
//  var param_2 = obj.shuffle()
//  console.log(param_2)
//  console.log(param_1)