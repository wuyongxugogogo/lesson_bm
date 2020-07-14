import React, { useEffect, useState, useMemo, useCallback } from 'react';

let set = new Set(); // 无重复的数据集 
// set.add(1);
// set.add(1);
// console.log(set)
function Demo(){
    console.log('render')
    const [ inputVal, setVal ] = useState('海阔天空');
    const [ list, setList ] = useState([]);
    // 缓存的时候检查依赖，只有依赖没有变化才会使用上次的值
    const val = useMemo(()=>[1,2],[]);// 缓存
    set.add(val);
    console.log(set.size)
    const handleChange = useCallback((event) => {
        setVal(event.target.value)
    })
    useEffect(()=>{
        fetch('http://neteasecloudmusicapi.zhaoboy.com/search?keywords='+inputVal)
        .then(res => res.json())
        .then((res) =>{
            setList(res.result.songs);
        })
    },[inputVal])
    // 依赖 react 检查 依赖里面有没有数据发生变化，没变化就不会重新调用
    // [] 一次 componentDidMount
    // [inputVal] 多次 componentDidUpdate
    return (
        <div>
            { list.length }
            <input type="text" value={inputVal} onChange={handleChange}/>
        </div>
    )
}

export default Demo;