import React, {createContext, useState} from "react";

export const UserContext = createContext(null);

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [tokenContext, setTokenContext] = useState('');

    return(
        <UserContext.Provider
        value={{
            user,
            setUser,
            tokenContext,
            setTokenContext
        }}>
           {
            children
           } 
        </UserContext.Provider>
    )
}