import React from 'react';

const userContext = React.createContext();

function getUserFromLocalStorage(){
    return localStorage.getItem('user-mwbazar-token') ? JSON.parse(localStorage.getItem('user-mwbazar-token')) : null
}

function UserContext(props){
    const [user,setUser] = React.useState(getUserFromLocalStorage());
    const [load,setLoad] = React.useState(false);


    const [agentDetails,setAgentDetails] = React.useState({})


    React.useEffect(()=>{
        localStorage.setItem('user-mwbazar-token',JSON.stringify(user))
    },[user])

    return (
        <userContext.Provider value={{user,setUser,load,setLoad,agentDetails,setAgentDetails}} >
            {props.children}
        </userContext.Provider>
    )
}

export {userContext,UserContext}