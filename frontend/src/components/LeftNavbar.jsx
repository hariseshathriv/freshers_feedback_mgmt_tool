import React, { useContext } from 'react'
import logo from '../images/logo2.jpeg'
import {Link, NavLink} from 'react-router-dom'
import UserContext from '../context/UserContext'

function LeftNavbar() {
    const {user} = useContext(UserContext);

    if(!user) return <div></div>

  return (
    <>
        <nav className='navbar'>
            <div className='navBox'>
                <a href="/">
                    <img src={logo} alt="logo" className='w-36'/>
                </a>

                <ul className='nav-items'>
                    <li className='nav-item'>
                        <NavLink
                            to="/dashboard"
                            className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-purple-800" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-800 lg:p-0`
                            }
                        >
                            Dashboard
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink
                            to="/feedback"
                            className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-purple-800" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-800 lg:p-0`
                            }
                        >
                            Feedback
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink
                            to="/adminDashboard"
                            className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-purple-800" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-800 lg:p-0`
                            }
                        >
                            Admin Dashboard
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default LeftNavbar