import React, { useContext } from 'react'
import logo from '../images/logo2.jpeg'
import {Link, NavLink} from 'react-router-dom'
import UserContext from '../context/UserContext'
import { useNavigate } from "react-router-dom";


function Menu() {
    const {user} = useContext(UserContext);
    const navigate = useNavigate();
    if(!user) return <div></div>

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const apiUrl = "http://localhost:3001/api/users/get-mentees/"+user.data.id;
          const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
    
          const data = await response.json();

          user.data.mentees = data.mentees;

          navigate("/feedback");

        } catch (error) {
          console.error("Error:", error);
        }
      };

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
                          <button onClick={handleSubmit}>Feedback</button>
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink
                            to="/Profile"
                            className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-purple-800" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-800 lg:p-0`
                            }
                        >
                            My Profile
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Menu;