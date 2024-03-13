import React, { useContext } from "react";

import { useLocation } from "react-router-dom";
import useUserStatus from "../context/UserContext";

function Navbar() {
  const { user, logout } = useUserStatus();
  console.log(user.name);
  const location = useLocation();
  const currentUrl = location.pathname;
  const nameOfPlace = currentUrl.slice(8);
  if (!user) return <div></div>;

  return (
    <nav className="topNav">
      <h1 className="text-xl text-hex-lightgrey">
        {nameOfPlace.charAt(0).toUpperCase() + nameOfPlace.slice(1)}
      </h1>
      <div className="container flex justify-end">
        <p className="text-xl text-hex-lightgrey mr-10 hover:text-2xl mt-1 ease-linear transition-all duration-150">
          {user && user.name}
        </p>
        <button
          className="text-hex-darkgrey bg-hex-lightgrey border border-solid border-black hover:bg-hex-pink hover:text-white active:bg-black font-bold uppercase text-xm px-3 py-1 rounded outline-none focus:outline-none mr-3 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={logout}
        >
          LOGOUT
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
