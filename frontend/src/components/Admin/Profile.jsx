import React, { useState, useContext } from 'react';
import useUserStatus from "../../context/UserContext";
import TopBar from './TopBar';

const Profile = () => {
    const {user} = useUserStatus();
    console.log(user)
    return (
        <div className='flex-grow'>
        <TopBar title={"Profile"}/>
      <div>
        <h2 className="mt-3 ml-4 text-2xl text-hex-blue">
          Account Information
        </h2>
        <form className="w-1/3 ml-4 mt-4 px-10 py-5 bg-hex-lightgrey rounded">
          <div className="flex justify-between">
            <label className="text-hex-darkgrey text-l font-bold">
              Name
            </label>
            <input className="rounded px-2 w-60" value={user.name} disabled/>
          </div>
          <div className="flex justify-between mt-2">
            <label className="text-hex-darkgrey text-l font-bold">
              Email
            </label>
            <input className="rounded px-2 w-60" value={user.email} disabled/>
          </div>
          <div className="flex justify-between mt-2">
            <label className="text-hex-darkgrey text-l font-bold">
              Designation
            </label>
            <input className="rounded px-2 w-60" value={user.desg} disabled/>
          </div>
          {/* <div className="flex justify-end mt-8">
            <button className="rounded text-hex-darkgrey bg-hex-grey mr-10 px-3 py-1 hover:text-black hover:bg-white ">
              Edit
            </button>
            <button className="rounded bg-hex-pink text-white px-3 py-1 hover:text-hex-pink hover:bg-white">
              Save
            </button>
          </div> */}
        </form>
      </div>
      </div>
    );
};
export default Profile;





