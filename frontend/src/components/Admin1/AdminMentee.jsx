import React, {useState, useEffect} from 'react'
import MenteeReview from './MenteeReview'
import TopBar from './TopBar'

const AdminMentee = () => {
    const [mentors,setMentors] = useState([])
    const [mentorName, setMentorName] = useState("");
    const [mentee, setMentee] = useState([]);
    const [menteeName , setMenteeName] = useState("");
    // const [trainingDate, setTrainingDate] = useState(new Date());
    
    useEffect(()=>{
        fetch('https://api.npoint.io/48f067e61a550b4ef6af')
        .then((data)=>data.json())
        .then((data)=>{
            data.sort((a,b)=>{
                const nameA=a.mentor.toUpperCase();
                const nameB=b.mentor.toUpperCase();
                if(nameA<=nameB){
                    return -1;
                }
                return 1;
            })
            return data;
            })
        .then((data)=>{
            setMentors(data)
        })
    },[])

    useEffect(()=>{
        fetch('https://api.npoint.io/48f067e61a550b4ef6af')
        .then((data)=>data.json())
        .then((data)=>{
            data.sort((a,b)=>{
                const nameA=a.mentor.toUpperCase();
                const nameB=b.mentor.toUpperCase();
                if(nameA<=nameB){
                    return -1;
                }
                return 1;
            })
            return data;
            })
        .then((data)=>{
            setMentee(data)
        })
    },[mentorName])


    return (
        <div className='flex-grow'>
            <TopBar title={"Feedback"}/>
            <div className='flex justify-around p-20 mt-10 text-hex-blue'>
                <div className='flex flex-col'>
                    <label htmlFor="mentor_name">Mentor Name</label>
                    <select id='mentor_name' 
                        className='w-60 border border-solid rounded-sm px-2 py-1 text-xl text-hex-blue'
                        value={mentorName}
                        onChange={(e)=>setMentorName(e.target.value)                      
                    }
                    >
                        <option value="" selected disabled>Select Mentor</option>
                        {
                            mentors.map((mentor)=>(
                                <option value={mentor.mentor_id} key={mentor.mentor_id} className='max-w-60 overflow-hidden text-ellipsis'> {mentor.mentor.length>20?mentor.mentor.slice(0,18)+"...":mentor.mentor} </option>
                            ))
                        }
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="mentee_name">Mentee Name</label>
                    <select id='mentee_name' 
                        className='w-60 border border-solid rounded-sm px-2 py-1 text-hex-blue text-xl'
                        value={menteeName}
                        onChange={(e)=>setMenteeName(e.target.value)}
                    >
                        <option value="" selected disabled>Select Mentee</option>
                        {
                            mentee.length>0 &&  
                            mentee.map((mentor)=>(
                                <option value={mentor.mentor_id} key={mentor.mentor_id} className='max-w-60 overflow-hidden text-ellipsis'> {mentor.mentor.length>20?mentor.mentor.slice(0,18)+"...":mentor.mentor} </option>
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
                mentorName.length>0 && menteeName.length>0 &&
                    <MenteeReview mentee={menteeName}/>
            }
        </div>
    )
}

export default AdminMentee