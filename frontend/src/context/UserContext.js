import React, { useContext , createContext } from 'react';

export const UserContext = createContext({
    user:{
        name:"",
        id:"",
        desg:"",
        email:""
    },
    loginStatus:false,
    login : ()=>{},
    logout : ()=>{}
});

export default function useUserStatus(){
    return useContext(UserContext);
}

export const UserProvider = UserContext.Provider;