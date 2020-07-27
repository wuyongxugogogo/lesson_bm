import React, { useState } from 'react'

let showSex = true
function Example2() {
    const [age, setAge] = useState(18);
    if(showSex){
        const [sex, setSex] = useState('男');
        showSex(false)
    } // 不能存在于条件语句中
    const [work, setWork] = useState('前端程序员');
    return (
        <div>
            <p>JSPang今年: {age}岁</p>
            <p>性别: {sex}</p>
            <p>工作: {work}</p>
        </div>
    )
}

export default Example2;