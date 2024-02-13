import React, { useContext } from 'react'
import UserContext from '../../context/UserContext';

const UserInfo = () =>{
    const {user} = useContext(UserContext);

    if(!user) return <div></div>
     
    return (
        <div className="container flex justify-between">
            <p className="text-2xl ml-3 hover:text-3xl ease-linear transition-all duration-150">
                Hello, {user.data.mentor_name}
            </p>
        <button
            className="text-black bg-transparent border border-solid border-black hover:bg-black hover:text-white active:bg-black font-bold uppercase text-xm px-3 py-1 rounded outline-none focus:outline-none mr-3 mb-1 ease-linear transition-all duration-150"
            type="button"
        >LOGOUT
        </button>
        </div>
    );
}
export default UserInfo;