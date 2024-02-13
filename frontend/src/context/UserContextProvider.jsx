import React, { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const setUserContext = (userData) => {
        setUser(userData);
    }
    return(
        <UserContext.Provider value={{user , setUserContext}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider;