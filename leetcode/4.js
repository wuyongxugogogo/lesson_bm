// 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

// 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

// 你可以假设 nums1 和 nums2 不会同时为空。

// 示例 1:

// nums1 = [1, 3]
// nums2 = [2]

// 则中位数是 2.0

var findMedianSortedArrays = function(nums1,nums2){
    var arr = [];
    var p1 = 0;
    var p2 = 0;
    while(p1<nums1.length&&p2<nums2.length){
        if(nums1[p1]<nums2[p2]){
            arr.push(nums1[p1]);
            p1++;
        }else{
            arr.push(nums2[p2]);
            p2++;
        }
    }
    while(p1<nums1.length){
        arr.push(nums1[p1]);
        p1++;
    }
    while(p2<nums2.length){
        arr.push(nums2[p2]);
        p2++;
    }
    var len = arr.length;
    var mid = 0;
    if(len%2==0){
        mid = ((arr[len/2]+arr[(len/2)-1])/2).toFixed(5);
    }else{
        mid = (arr[(len-1)/2]).toFixed(5);
    }
    return mid;
};

console.log(findMedianSortedArrays([1,4,5,6],[2,3,7,9,10]));