var countCharacters = function(words, chars) {
    let size = 0;
    let charMap = new Map();
    for (let char of chars){
        charMap.set(char,(charMap.has(char)? charMap.get(char)+1 : 1))
    }
    for (let word of words){
        let wordMap = new Map();
        for(let char of word){
            wordMap.set(char,(wordMap.has(char)? wordMap.get(char)+1 : 1))
        }
        let k = true;
        for(let char of word){
            if(wordMap.get(char) > charMap.get(char) || !charMap.has(char)){
                k = false;
                break
            }
        }
        if(k) size += word.length
    }
    return size
};

// 用哈希表解题