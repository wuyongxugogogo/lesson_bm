import React, { useState, useRef, useEffect } from 'react';
export const MyComponent = () => {
    const [visible, setVisible] = useState(false);
    // mount unmount
    return (
        <>
            {visible && <MyChildComponent />}
            <button onClick={() => { setVisible(!visible) }} >
                Toggle Child component visibility:</button>
        </>
    )
}

export const MyChildComponent = (props) => {
    const [filter, setFilter] = useState("");
    const [userCollection, setUserCollection] = useState([]);
    const mountedRef = useRef(false);

    useEffect(()=>{
        mountedRef.current = true
        return () => (mountedRef.current = false)
    })

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://jsonplaceholder.typicode.com/users?name_like=${filter}`)
                .then(response => response.json())
                .then(json => setUserCollection(json))
        }, 2500)
    }, [filter])

    return (
        <div>
            <input
                type="text"
                value={filter}
                onChange={e => setFilter(e.target.value)} />
            <ul>
                {
                    userCollection.map((user, index) => (
                        <li key={index}>{user.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}