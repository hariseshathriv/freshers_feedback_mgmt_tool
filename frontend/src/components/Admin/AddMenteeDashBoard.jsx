import React,{useState} from 'react'
import useUserStatus from '../../context/UserContext';

const AddMenteeDashBoard = ({onClose}) => {

    const {mentorDetails} = useUserStatus();
    const [menteeEmail , setMenteeEmail] = useState("");
    const [menteeName , setMenteeName] = useState("");
    const [mentorName , setMentorName] = useState("");

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const menteeData = {
            "mentor_id" : mentorName,
            "name" : menteeName,
            "email" : menteeEmail,
        }
        try {
            const response = await fetch("http://localhost:3001/api/users/mentees",{
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(menteeData),
            });

            const data =await response.json();
            console.log(data);
            if(data.status === 200){
                alert("Mentee Added Successfully");
            }
            else alert("Unsuccessful Attempt")
        } catch (error) {
            console.error("Error:", error);
            alert("Bad Request");
        }
        onClose();
    }
        
    return (
        <div className='fixed top-0 bottom-0 left-0 right-0 z-50 bg-hex-grey flex justify-center items-center bg-transparent'
            onClick={onClose}
        >
            <div
                className='w-[500px] h-[300px] bg-hex-grey p-4 rounded-lg flex items-center justify-center'
                onClick={(e)=>e.stopPropagation()}
            >
                <form className='m-3 flex flex-col gap-5 items-center' onSubmit={handleSubmit}>
                    <div className='flex justify-start'>
                        <label htmlFor="mentee_id" className='w-60 text-xl text-hex-blue'>Mentee Email</label>
                        <input 
                            className='mx-4 bg-hex-lightgrey px-2 outline-none rounded-md w-48'
                            type="email" 
                            id='mentee_email'
                            value={menteeEmail}
                            placeholder='mentee Id'
                            onChange={(e)=>setMenteeEmail(e.target.value)}
                            required/>
                    </div>
                    <div className='flex justify-start'>
                        <label htmlFor="mentee_name" className='w-60 text-xl text-hex-blue'>Mentee Name</label>
                        <input 
                            className='mx-4 bg-hex-lightgrey px-2 outline-none rounded-md w-48'
                            type="text" 
                            id='mentee_name'
                            value={menteeName}
                            placeholder='Mentee Name'
                            onChange={(e)=>setMenteeName(e.target.value)}
                            required/>
                    </div>
                    <div className='flex justify-start'>
                        <label htmlFor="mentor_name" className='w-60 text-xl text-hex-blue'>Mentor Name</label>
                        <select 
                            className='mx-4 bg-hex-lightgrey px-2 outline-none rounded-md w-48'
                            id='mentor_name'
                            value={mentorName}
                            placeholder='Mentor Name'
                            onChange={(e)=>setMentorName(e.target.value)}
                            required
                        >
                            <option value="" selected disabled>Select Mentor</option>
                            {
                                mentorDetails.map((mentor)=>(
                                    <option value={mentor.id} key={mentor.id} className='max-w-48 overflow-hidden text-ellipsis'> {mentor.name.length>20?mentor.mentor.slice(0,14)+"...":mentor.name} </option>
                                ))
                            }
                        </select>
                    </div>
                    <button type='submit' className='bg-hex-blue text-hex-lightgrey p-2 rounded-md'>Add Mentee</button>
                </form>
            </div>
        </div>
    )
}

export default AddMenteeDashBoard