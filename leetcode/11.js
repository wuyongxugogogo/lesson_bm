// 盛最多水的容器
// 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
// 在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。
// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 示例：
// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49   第二个和最后一个组成最大容器 7*7
var maxArea = function(height) {
    let maxArea = 0;
    for(let i = 0 ; i < height.length; i++){
        for(let j = i+1 ; j < height.length; j++){
            let min = Math.min(height[i],height[j]);
            let area = (j-i)*min;
            if(maxArea < area){
                maxArea = area;
            }
        }
    }
    return maxArea;
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]));