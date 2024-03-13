import React, { useContext } from "react";
import logo from "../images/jmanLogo3.png";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useUserStatus from "../context/UserContext";
import { RiAccountCircleLine } from "react-icons/ri";
import { SlHome } from "react-icons/sl";
import { LuNetwork } from "react-icons/lu";

function Menu() {
  const { user, updateMenteeDetails } = useUserStatus();
  const navigate = useNavigate();
  if (!user) return <div></div>;

  return (
    <>
      <nav className="navbar">
        <div className="navBox">
          <a href="/">
            <img src={logo} alt="logo" className="w-32 h-10" />
          </a>

          <ul className="nav-items">
            <li className="nav-item">
              <NavLink
                to="/mentor/dashboard"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-purple-800" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-800 lg:p-0`
                }
              >
                DashBoard&nbsp;&nbsp;
                <SlHome className="inline mb-1.5" />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/mentor/feedback"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-purple-800" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-800 lg:p-0`
                }
              >
                Feedback&nbsp;&nbsp;
                <LuNetwork className="inline mb-1.5" />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/mentor/Profile"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-purple-800" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-800 lg:p-0`
                }
              >
                My Profile&nbsp;&nbsp;
                <RiAccountCircleLine className="inline mb-1.5" />
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Menu;
