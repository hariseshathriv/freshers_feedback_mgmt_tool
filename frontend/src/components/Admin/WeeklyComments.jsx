import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import {useState, useEffect} from 'react'
import { Navigate, useNavigate , useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'


const WeeklyComments = ({mentee='abhay'}) => {
    const [week,setWeek] = useState([])
    const [comment,setComment] = useState([]);
    const {key1 , key2} = useParams();
    const navigate = useNavigate();
    const goBack = ()=>{
        navigate(`/adminDashboard/${key1}`)
    }
    useEffect(()=>{
        let totalWeek = parseInt((Math.random())*10)%6;
        let weekStr = []
        let commentStr = []
        for(let i=0; i<totalWeek; i++){
            weekStr.push(`Week ${i+1}`)
            let len=1+parseInt((Math.random())*1000)%50
            let str="";
            for(let j=0;j<len;j++) str = str+"Very Good "
            commentStr.push(str);
        }
        console.log(commentStr);
        setWeek(weekStr);
        setComment(commentStr);
    },[])
    return (
        <>
            <div className='w-full h-full flex justify-center bg-transparent'>
                <div className='w-10/12 h-10/12 flex flex-col p-2 mx-4 my-10 bg-[#bcf5f5] rounded-3xl gap-y-3'>
                    <div className='px-1 py-2' onClick={goBack}><FaArrowLeft className='text-2xl text-center'/></div>
                    <div className="flex justify-center items-center">
                        <span className='text-3xl rounded-lg px-20 bg-[#76cfe2]'>{mentee}</span>
                    </div>
                    {
                        comment.length>0 && 
                        comment.map((comments,index)=>(
                            <div className='flex justify-items-start gap-x-4'>
                                <div className='w-1/12 bg-blue-500 flex justify-center items-center rounded-xl text-2xl'>{week[index]}</div>
                                <div className='w-10/12 bg-white rounded-md p-2'>{comments}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default WeeklyComments