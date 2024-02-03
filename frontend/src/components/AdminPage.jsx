import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";


const AdminPage = () => {
    const mentors = ['Nitesh','Rahul','Rohit','Pahal','Johith','Sudheer','Vergab','Abhay','Mihir','Leo','Hari','Naveen','Doss','Modi','Narendra','Nitesh','Rahul','Rohit','Pahal','Johith','Sudheer','Vergab','Abhay','Mihir','Leo','Hari','Naveen','Doss','Modi','Narendra']
    mentors.sort();
    const [data,setData ] = useState(mentors);
    const [adminName,setAdminName] = useState("Leo");
  return (
    <>
        <div>
            <div className='flex justify-between px-4 m-3'>
                <p className='text-3xl text-cyan-950'>Hello, {adminName}</p>
                <button className='border border-solid border-slate-900 p-1 bg-slate-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500'>Log Out</button>
            </div>
            <div className='bg-slate-800 rounded-md p-3 mx-4'>
                <div className='flex justify-start'>
                    <span className='text-3xl text-white'>Choose Mentor For Review</span>
                    <FaSearch className='ml-3 mt-2 text-white text-2xl'/>
                </div>
                <div className="p-4 bg-blue-200 grid grid-cols-3 md:grid-cols-4 gap-y-5 lg:gap-x-20 xl:gap-x-40 rounded-xl m-2">
                {
                    data.map((item,index)=>{
                        return(
                            <div key={index} className='md:m-3 md:p-3 border border-solid border-slate-900 rounded-lg text-center md:text-3xl bg-red-300 cursor-pointer'>
                                {item}
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    </>
  )
}

export default AdminPage