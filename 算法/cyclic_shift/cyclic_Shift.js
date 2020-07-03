let arr = [1,2,3,4,5,6,7] , k = 3
// [7,1,2,3,4,5,6]
// [6,7,1,2,3,4,5]
// [5,6,7,1,2,3,4]

// function RShift(list, k){
//     const copy = [...list];
//     const n = list.length;
//     if(k % n === 0) return

//     for(let i = 0; i < n; i++){
//         // 时间复杂度O(n)
//         // 空间复杂度O(n)
//         list[i] = copy[ [k+i] % n] // 左移
//     }
//     return list
// }
// console.log(RShift(arr,k))

// 三次翻转法
// 1.[ 0, n-k-1]
// 2.[ n-k, n-1]
// 3.[ 0, n-1]
function reverse(list, start, end){
    let t = null
    while(start < end){
        t = list[start]
        list[start] = list[end]
        list[end] = t
        start++
        end--
    }
}
function RShift(list, k){
    const n = list.length;
    if(k % n === 0) return
    reverse(list, 0, n-k-1)
    reverse(list, n-k, n-1)
    reverse(list, 0, n-1)
    return list
}
console.log(RShift(arr,k))