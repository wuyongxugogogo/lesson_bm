var minCostClimbingStairs = function(cost) {
    cost.push(0)
    let l = cost.length
    let res = [cost[0],cost[1]]
    for(let i = 2;i < l; i++){
        res[i] = Math.min(res[i-1],res[i-2]) + cost[i]
    }
    return res[l-1]
};

console.log(minCostClimbingStairs([0,1,2,2]))