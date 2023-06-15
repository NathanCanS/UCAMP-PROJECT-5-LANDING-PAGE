import React, {createContext, useState} from "react";

export const UserContext = createContext(null);

export const UserProvider = ({children}) => {
    const [userContext, setUserContext] = useState(null);
    const [tokenContext, setTokenContext] = useState('');

    return(
        <UserContext.Provider
        value={{
            userContext,
            setUserContext,
            tokenContext,
            setTokenContext
        }}>
           {
            children
           } 
        </UserContext.Provider>
    )
}