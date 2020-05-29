function match1(string){
    let foundA = false
    for(let char of string){
        if(char === 'a'){
            foundA = true;
        }else if(foundA && char){
            return true;
        }else{
            foundA = false;
        }
    }
    return false;
}
console.log(match1('i abxb good'))