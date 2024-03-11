import React, {useState, useEffect} from 'react'
import MenteeReview from './MenteeReview'
import TopBar from './TopBar'
import useUserStatus from '../../context/UserContext'

const AdminMentee = () => {
    const { mentorDetails } = useUserStatus();
    const [mentorName, setMentorName] = useState("");
    const [mentees, setMentees] = useState([]);
    const [menteeIndex , setMenteeIndex] = useState("");
    const [menteeInfo , setMenteeInfo] = useState(null);
    // const [trainingDate, setTrainingDate] = useState(new Date());
    
    const updateMentees = async()=>{
        try {
            const url = "http://localhost:3001/api/users/get-mentees/"+mentorName;
            const res = await fetch(url,{
                method:'GET',
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const data = await res.json();
            console.log(data);
            if(data.status === 200)
                setMentees(data.mentees)
            else console.log("No Mentee Data");
        } catch (error) {
            console.error(error);
        }
    }

    const handleMentorName = (e)=>{
        setMentorName(e.target.value);
        setMenteeIndex("");
        setMentees([]);
        setMenteeInfo(null);
    }

    useEffect(()=>{
        if(mentorName.length > 0){
            updateMentees();
        }
    },[mentorName])

    useEffect(()=>{
        setMenteeInfo(null);
        if(menteeIndex.length>0)
            setMenteeInfo(mentees[parseInt(menteeIndex)])
    },[menteeIndex])


    return (
        <div className='flex-grow'>
            <TopBar title={"Feedback"}/>
            <div className='flex justify-around p-20 mt-10 text-hex-blue'>
                <div className='flex flex-col'>
                    <label htmlFor="mentor_name">Mentor Name</label>
                    <select id='mentor_name' 
                        className='w-60 border border-solid rounded-sm px-2 py-1 text-xl text-hex-blue'
                        value={mentorName}
                        onChange={ handleMentorName }
                    >
                        <option value="" selected disabled>Select Mentor</option>
                        {
                            mentorDetails.map((mentor)=>(
                                <option value={mentor.id} key={mentor.id} className='max-w-60 overflow-hidden text-ellipsis'> {mentor.name.length>20?mentor.name.slice(0,18)+"...":mentor.name} </option>
                            ))
                        }
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="mentee_name">Mentee Name</label>
                    <select id='mentee_name' 
                        className='w-60 border border-solid rounded-sm px-2 py-1 text-hex-blue text-xl'
                        value={menteeIndex}
                        onChange={(e)=> setMenteeIndex(e.target.value) }
                    >
                        <option value="" selected disabled>Select Mentee</option>
                        {
                            mentees.length>0 &&  
                            mentees.map((mentee,index)=>(
                                <option value={index} key={mentee.id} className='max-w-60 overflow-hidden text-ellipsis'> {mentee.name.length>20?mentee.name.slice(0,18)+"...":mentee.name} </option>
                            ))
                        }
                    </select>
                </div>
                {/* <div className='flex flex-col'>
                    <label htmlFor="training-date">Training Date</label>
                    <input type="date" id='training-date' className='w-60 border border-solid rounded-sm px-2 py-1 text-[#D1CFDE]'/>
                </div> */}
            </div>
            {
                menteeInfo && 
                    <MenteeReview id={menteeInfo.id} name={menteeInfo.name}/>
            }
        </div>
    )
}

export default AdminMentee