import { useState } from "react"

function jspang() {

    const [color, setColor] = useState('blue')

    const changeColor = () => {
        setColor(color == 'blue' ? 'red' : 'blue')
    }

    return (
        <>
            <div>技术胖免费前端教程</div>
            <div><button onClick={changeColor}>改变颜色</button></div>

            <style jsx>
                {`
                    div{color:${color};}
                `}
            </style>
        </>
    )
}

export default jspang