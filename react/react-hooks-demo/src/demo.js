import React, { useEffect, useState } from 'react';

// export const MyComponent = props => {
//     const [userInfo, setUserInfo] = React.useState({
//         name: 'John',
//         lastname: 'Doe'
//     });
//     return (
//         <>
//             <h4>{userInfo.name}{userInfo.lastname}</h4>
//             <input type="text"
//                 value={userInfo.name}
//                 onChange={(e) => {
//                     setUserInfo({
//                         ...userInfo, name: e.target.value
//                     })
//                 }}
//             />
//             <input type="text"
//                 value={userInfo.lastname}
//                 onChange={(e) => {
//                     setUserInfo({
//                         ...userInfo, lastname: e.target.value
//                     })
//                 }}
//             />
//         </>
//     )
// }

// export const MyComponent = props => {
//     // JSX -> dom node
//     const [myName, setMyName] = React.useState('John Doe')
//     return (
//         <>
//             <h4>{myName}</h4>
//             <input type="text" value={myName}
//                 onChange={(e) => setMyName(e.target.value)}
//             />
//         </>
//     )
// }

// export const MyComponent = () => {
//     const [username, setUsername] = React.useState("");
//     useEffect(() => {
//         setTimeout(()=>{
//             setUsername("chao")
//         },3000)
//     }, []);
//     return (
//         <>
//             <h4>{username}</h4>
//             <input type="text"
//                 value={username}
//                 onChange={e => setUsername(e.target.value)}
//             />
//         </>
//     )
// }

export const MyComponent = () => {
    const [visible, setVisible] = React.useState(false);
    return (
        <>
            {visible && <MyChildComponent />}
            <button onClick={() => setVisible(!visible)} >
                Toggle Child component visibility
            </button>
        </>
    )
}

const MyChildComponent = () => {
    const [userInfo, setUserInfo] = React.useState({
        name: 'John',
        lastname: 'Done'
    })

    useEffect(() => {
        console.log('called when the component is mounted');
        // unmount
        return () => {
            console.log(
                "Called on component unmounted, check the [] on the react use effect"
            )
        }
    })

    return (
        <>
            <h3>
                {userInfo.name}{userInfo.lastname}
            </h3>
            <input type="text"
                onChange={e => setUserInfo({ ...userInfo, name: e.target.value })}
            />
        </>
    )
}