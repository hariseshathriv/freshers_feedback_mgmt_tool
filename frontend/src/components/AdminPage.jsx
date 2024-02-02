import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const AdminPage = () => {
    const [data,setData ] = useState(['Nitesh','Rahul','Rohit','Pahal','Johith','Sudheer','Vergab','Abhay','Mihir','Leo','Hari','Naveen','Doss','Modi','Narendra','Nitesh','Rahul','Rohit','Pahal','Johith','Sudheer','Vergab','Abhay','Mihir','Leo','Hari','Naveen','Doss','Modi','Narendra']);
  return (
    <>
        <div className="p-4 bg-gray-200 grid grid-cols-4 gap-y-5 lg:gap-x-20 xl:gap-x-40">
        {
            data.map((item,index)=>{
                return(
                    <div key={index} className='md:m-3 md:p-3 border border-solid border-slate-900 rounded-md text-center md:text-3xl'>
                        {item}
                    </div>
                )
            })
        }
        </div>
    </>
  )
}

export default AdminPage