import React, { useContext , createContext } from 'react';

export const UserContext = createContext({
    user:{
        name:"",
        id:"",
        desg:"",
        email:""
    },
    mentorDetails:[],
    menteeDetails:[],
    loginStatus:false,
    login : ()=>{},
    logout : ()=>{},
    updateMentorDetails : ()=>{},
    updateMenteeDetails : ()=>{}
});

export default function useUserStatus(){
    return useContext(UserContext);
}

export const UserProvider = UserContext.Provider;