import React, { useState, useEffect } from 'react';
// closure
export const MyComponent = () => {
    const [message, setMessage] = useState("initial message");
    const [seconds, setSeconds] = useState(0);
    const secondsRef = React.useRef(seconds);

    useEffect(() => {
        setTimeout(() => {
            console.log(seconds);
            setSeconds(1);
            secondsRef.current = 1
        }, 1000)

        setTimeout(() => {
            setMessage(`Total seconds: ${secondsRef.current}`)
        }, 2000)
    }, [])

    return (
        <>
            <h3>{message}</h3>
            <h4>{seconds}</h4>
        </>
    )
}