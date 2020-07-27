var generate = function (numRows) {
    if (numRows == 0) return []
    if (numRows == 1) return [[1]]
    if (numRows == 2) return [[1], [1, 1]]

    let res = [[1], [1, 1]];
    for (let i = 2; i < numRows; i++) {
        let item = [];
        for (let j = 0; j <= i; j++) {
            if (j == 0){
                item.push(1)
                continue
            }
            if (j == i){
                item.push(1)
                continue
            }
            item.push(res[i-1][j-1] + res[i-1][j])
        }
        res.push(item)
    }
    return res
};


console.log(generate(5))