// var threeSum = function(nums) {
//     let target = 0;
//     let result = [];
//     let nums2 = nums.sort((a,b)=>a - b);
//     for(let i = 0; i < nums2.length-2; i++){
//         for(let j = i+1; j < nums2.length-1; j++){
//             for(let k = j+1; k<nums2.length ; k++){
//                 if(nums[i]+nums[j]+nums[k] === target){
//                     result.push([nums[i],nums[j],nums[k]])
//                 }
//             }
//         }
//     }
    
//     for(let i = 0;i<result.length-1;i++){
//         for(let j = i+1; j<result.length;j++){
//             if(result[i].toString() === result[j].toString()){
//                 result.splice(j,1);
//                 j--;
//             }
//         }
//     }
//     return result
// };

var threeSum = function(nums){
    let ans = [];
    if(nums == null || nums.length<3) return ans;
    nums = nums.sort((a,b)=>a - b);
    for(let i=0;i<nums.length;i++){
        if(nums[i]>0) break;
        if(i>0&&nums[i]==nums[i-1]) continue;
        let L = i+1;
        let R = nums.length-1;
        while(L<R){
            const sum = nums[i] + nums[L] + nums[R];
            if(sum == 0){
                ans.push([nums[i],nums[L],nums[R]]);
                while(L<R && nums[L] == nums[L+1]) L++;
                while(L<R && nums[R] == nums[R-1]) R--;
                L++;
                R--;
            }
            else if(sum<0) L++;
            else if(sum>0) R--;
        }
    }
    return ans
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]))