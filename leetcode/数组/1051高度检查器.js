var heightChecker = function(heights) {
    let heights2 = [...heights];
    heights2.sort((a,b)=>a-b);
    let k = 0;
    for(let i = 0; i<heights.length; i++){
        if(heights[i] !== heights2[i]) k++;
    }
    return k
};
console.log(heightChecker([1,1,4,2,1,3]))