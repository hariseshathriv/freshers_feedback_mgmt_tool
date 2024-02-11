import React from 'react'
import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

function MenteeView({Mentor='Hari'}) {
  const Mentees = ['Nitesh Modi','Pahal Jain','Sudheer Kumar','Johith', 'Mihir','Abhay Dayma','Iyer','VenuGopal Iyer','MutuSwami Venu Gopal Iyer','ChinnaSwami MutuSwami Venu Gopal Iyer']
  const [menteesName, setMenteesName]=useState([]);
  const { key1 } = useParams();
  
  
  useEffect(()=>{
    Mentees.sort();
    setMenteesName(Mentees);
  },[])

  return (
    <>
      <div className="w-full flex flex-col bg-[#fbd2b6] p-4 h-full">
        <div className="flex justify-center items-center">
          <span className='text-3xl rounded-lg px-20 bg-[#efb3a6]'>{Mentor}</span>
        </div>
        <div className="grid grid-cols-3 gap-y-5 gap-x-40 p-2">
          {
            menteesName.map((mentee,index)=>(
              <Link to={`/adminDashboard/${key1}/${mentee}`} className='border border-solid border-cyan-800 rounded-lg p-2 text-2xl text-blue-900 text-nowrap overflow-hidden text-ellipsis text-center bg-[#f5c691] shadow-lg'>
                {mentee}
              </Link>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default MenteeView