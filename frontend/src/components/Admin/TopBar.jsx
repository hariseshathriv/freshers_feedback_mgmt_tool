import React,{useState, useContext} from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
import { MdNotificationsNone } from "react-icons/md";
import useUserStatus from "../../context/UserContext";
import { useNavigate } from 'react-router-dom';

const TopBar = ({title}) => {
    const {user , logout} = useUserStatus();
    const [showLogOut, setShowLogOut] = useState(false)
    const navigate = useNavigate();
    const handleLogout = ()=>{
      logout();
      navigate("/");
    }
  return (
    <div className='flex justify-between bg-hex-blue items-center'>
        <div className='p-2 text-hex-lightgrey text-2xl pl-4'>
            {title}
        </div>
        <div className='px-4'>
            <div className='flex text-xl items-center p-4'>
              <div className='flex items-center pr-8 relative'>
                <span className='px-4 text-hex-lightgrey'>{user.name}</span> 
                <RiArrowDropDownLine 
                  color='#f2f1f6'
                  onClick={()=>setShowLogOut((prev)=>!prev)}/> 
                {
                  showLogOut && 
                  <div 
                    className={` opacity-100 absolute top-8 right-0 flex items-center bg-hex-blue p-1 text-hex-lightgrey rounded-md drop-shadow-lg`}
                    onClick={handleLogout}
                  >
                    <span className='px-1'>Log Out</span>
                    <IoIosLogOut />
                  </div>
                }
              </div>
              <MdNotificationsNone color='#f2f1f6' />
            </div>
        </div>
    </div>
  )
} 
export default TopBar