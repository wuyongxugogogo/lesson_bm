var fourSum = function(nums, target) {
    let ans = [];
    if(nums == null || nums.length<4) return ans;
    nums = nums.sort((a,b)=>a - b);
    for(let i=0;i<nums.length-3;i++){
        // 若当前循环的前四位数字已大于 target
        if(nums[i]+nums[i+1]+nums[i+2]+nums[i+3]>target)break;
        // 若与已遍历过的数字相同，避免结果中出现重复的数组
        if(i>0&&nums[i]==nums[i-1]) continue;
        for(let j=i+1;j<nums.length-2;j++){
            // 若与已遍历过的数字相同，避免结果中出现重复的数组
            if(j>i+1&&nums[j]==nums[j-1])continue;
            let L = j+1;
            let R = nums.length-1;
            while(L<R){
                const sum = nums[i] + nums[j] + nums[L] + nums[R];
                if(sum == target){
                    ans.push([nums[i],nums[j],nums[L],nums[R]]);
                    while(L<R && nums[L] == nums[L+1]) L++;
                    while(L<R && nums[R] == nums[R-1]) R--;
                    L++;
                    R--;
                }
                else if(sum<target) L++;
                else if(sum>target) R--;
            }
        }
    }
    return ans
};
console.log(fourSum([0,0,0,0],0))