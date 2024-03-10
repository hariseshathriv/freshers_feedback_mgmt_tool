import React, { useState, useContext } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
import { MdNotificationsNone } from "react-icons/md";
import UserContext from "../../context/UserContexts";

const TopBar = ({ title }) => {
  // const {user} = useContext(UserContext)
  const [showLogOut, setShowLogOut] = useState(false);
  const user = "nitesh";
  return (
    <div className="flex justify-between bg-hex-blue items-center">
      <div className="p-2 text-hex-lightgrey text-2xl pl-4">{title}</div>
      <div className="px-4">
        <div className="flex text-xl items-center p-4">
          <div className="flex items-center pr-8 relative">
            <span className="px-4 text-hex-lightgrey">{user}</span>
            <RiArrowDropDownLine
              color="#f2f1f6"
              onClick={() => setShowLogOut((prev) => !prev)}
            />
            <div
              className={`${
                showLogOut ? "opacity-100" : ""
              } opacity-0 absolute top-8 left-5 flex items-center bg-hex-blue p-1 text-hex-lightgrey rounded-md drop-shadow-lg`}
            >
              <span className="px-1">Log Out</span>
              <IoIosLogOut />
            </div>
          </div>
          <MdNotificationsNone color="#f2f1f6" />
        </div>
      </div>
    </div>
  );
};
export default TopBar;
