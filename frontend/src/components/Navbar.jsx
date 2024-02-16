import React from "react";
import UserInfo from "./Mentor/UserInfo";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navBox">
          <a href="/">
            <h1 className="text-3xl">JMAN GROUP</h1>
          </a>

          <span className=" text-3xl">FRESHERS FEEDBACK MANAGEMENT TOOL</span>
        </div>
      </nav>
      <UserInfo />
    </>
  );
}

export default Navbar;
