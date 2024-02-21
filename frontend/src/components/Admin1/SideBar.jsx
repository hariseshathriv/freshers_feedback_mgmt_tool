import React from 'react'
import logo from '../../images/logo2.jpeg'
import { SlHome } from "react-icons/sl";
import { LuNetwork } from "react-icons/lu";
import { RiAccountCircleLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';


const SideBar = () => {
  return (
    <div className='z-50 border-r-2 border-[#a8a7a7] h-screen'>
        <div className='flex flex-col gap-4 w-[2/12] p-4 pr-8 '>
            <a href="jmangroup.com" target="_blank">
                <img src={logo} alt="logo" className='w-40'/>
            </a>
            <NavLink to={"/admin/dashBoard"} className={({isActive})=>`flex justify-evenly p-1 ${isActive ? "text-purple-800 bg-hex-grey" : "text-gray-700"}`}>
                <div className='flex items-center'><SlHome /></div>
                <div>DashBoard</div>
            </NavLink>
            <NavLink to={"/admin/feedBack"} className={({isActive})=>`flex justify-evenly p-1 ${isActive ? "text-purple-800 bg-hex-grey" : "text-gray-700"}`}>
                <div className='flex items-center'><LuNetwork /></div>
                <div>FeedBack</div>
            </NavLink>
            <NavLink to={"/profile"} className={({isActive})=>`flex justify-evenly p-1 ${isActive ? "text-purple-800 bg-hex-grey" : "text-gray-700"}`}>
                <div className='flex items-center'><RiAccountCircleLine /></div>
                <div>My Account</div>
            </NavLink>
        </div>
    </div>
  )
}

export default SideBar