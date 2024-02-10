import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { useEffect } from 'react';
import { useCallback } from 'react';


const AdminPage11 = () => {
    const mentors = ['Nitesh','Rahul','Rohit','Pahal','Johith','Sudheer','Vergab','Abhay','Mihir','Leo','Hari','Naveen','Doss','Modi','Narendra','Nitesh','Rahul','Rohit','Pahal','Johith','Sudheer','Vergab','Abhay','Mihir','Leo','Hari','Naveen','Doss','Modi','Narendra']
    
    const [data,setData ] = useState([]);
    const [filteredData,setFilteredData] = useState([]);
    const [adminName,setAdminName] = useState("Leo");
    const [showInput,setShowInput] = useState(false);
    const [searchName,setSearchName] = useState("");
    
    useEffect(()=>{
        mentors.sort();
        setData(mentors);
        setFilteredData(mentors);
    },[])
    
    let handleSearch = (searchKey)=>{
        if(showInput==="") setFilteredData(data);
        else{
            let strr = searchKey.toLowerCase();
            const fData = data.filter((mentor)=>{
                if(mentor.toLowerCase().includes(strr)) return true;
                return false;
            })
            setFilteredData(fData);
        }
    }

    const handleSearchClick = ()=>setShowInput(!showInput);
    return (
        <>
            <div>
                <div className='flex justify-between px-4 m-3'>
                    <p className='text-3xl text-cyan-950'>Hello, {adminName}</p>
                    <button className='border border-solid border-slate-900 p-1 bg-slate-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500'>Log Out</button>
                </div>
                <div className='bg-slate-800 rounded-md p-3 mx-4'>
                    <div className='flex justify-start items-center'>
                        <span className='text-3xl text-white'>Choose Mentor For Review</span>
                        {
                            showInput && (
                                <input 
                                    type="text" 
                                    placeholder='Mentor Name' 
                                    className='text-center border border-none text-cyan-800 text-2xl p-1 rounded-md mx-1 focus:outline-none focus:ring focus:ring-cyan-500' 
                                    value={searchName} 
                                    onChange={(e)=>{
                                        setSearchName(e.target.value);
                                        handleSearch(e.target.value);
                                    }}
                                />
                            )
                        }
                        <FaSearch className='ml-2 text-center items-center text-white text-2xl' onClick={handleSearchClick}/>
                    </div>
                    <div className="p-4 bg-blue-200 grid grid-cols-3 md:grid-cols-4 gap-y-5 lg:gap-x-20 xl:gap-x-40 rounded-xl m-2">
                    {
                        filteredData.map((item,index)=>{
                            return(
                                <div key={index} className='md:m-3 md:p-3 border border-solid border-slate-900 rounded-lg text-center md:text-3xl bg-red-300 cursor-pointer'>
                                    <a href='#'>{item}</a>
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

export default AdminPage11