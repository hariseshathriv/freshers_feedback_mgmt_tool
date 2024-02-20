import React, { useState, useContext } from 'react';
import UserContext from '../../../context/UserContext';

const MentorProfile = () => {
    const {user} = useContext(UserContext);
    console.log(user)
    return (
      <div>
        <h2 className="mt-3 ml-4 text-2xl text-custom-hex-blue">
          Account Information
        </h2>
        <form className="w-1/3 ml-4 mt-4 px-10 py-5 bg-custom-hex-lightgrey rounded">
          <div className="flex justify-between">
            <label className="text-custom-hex-darkgrey text-l font-bold">
              Name
            </label>
            <input className="rounded px-2" value={user.data.mentor_name}/>
          </div>
          <div className="flex justify-between mt-2">
            <label className="text-custom-hex-darkgrey text-l font-bold">
              Email
            </label>
            <input className="rounded px-2" value={user.data.email}/>
          </div>
          <div className="flex justify-between mt-2">
            <label className="text-custom-hex-darkgrey text-l font-bold">
              Designation
            </label>
            <input className="rounded px-2" value={user.data.designation} />
          </div>
          <div className="flex justify-end mt-8">
            <button className="rounded text-custom-hex-darkgrey bg-custom-hex-grey mr-10 px-3 py-1 hover:text-black hover:bg-white ">
              Edit
            </button>
            <button className="rounded bg-custom-hex-pink text-white px-3 py-1 hover:text-custom-hex-pink hover:bg-white">
              Save
            </button>
          </div>
        </form>
      </div>
    );
};
export default MentorProfile;





