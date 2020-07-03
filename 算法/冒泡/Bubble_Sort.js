let arr = [1,21,5,8,38,18,9]

function bubble(array){
    for(let i = array.length - 1; i > 0; i--){
        for(let j = 0; j < i; j++){
            if(array[j]>array[j+1]){
                [array[j],array[j+1]] = [array[j+1],array[j]]
            }
        }
    }
    return array
}
console.log(bubble(arr))