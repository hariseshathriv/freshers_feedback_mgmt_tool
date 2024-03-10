import React,{useState} from 'react'

const AddMenteeDashBoard = ({onClose}) => {

    const [internEmail , setInternEmail] = useState("");
    const [internName , setInternName] = useState("");
    const [mentorName , setMentorName] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        const data = {
            intern_email : internEmail,
            intern_name : internName,
            mentor_name :mentorName
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
                        <label htmlFor="intern_id" className='w-60 text-xl text-hex-blue'>Intern Email</label>
                        <input 
                            className='mx-4 bg-hex-lightgrey px-2 outline-none rounded-md'
                            type="email" 
                            id='intern_email'
                            value={internEmail}
                            placeholder='Intern Id'
                            onChange={(e)=>setInternEmail(e.target.value)}
                            required/>
                    </div>
                    <div className='flex justify-start'>
                        <label htmlFor="intern_name" className='w-60 text-xl text-hex-blue'>Intern Name</label>
                        <input 
                            className='mx-4 bg-hex-lightgrey px-2 outline-none rounded-md'
                            type="text" 
                            id='intern_name'
                            value={internName}
                            placeholder='Intern Name'
                            onChange={(e)=>setInternName(e.target.value)}
                            required/>
                    </div>
                    <div className='flex justify-start'>
                        <label htmlFor="mentor_name" className='w-60 text-xl text-hex-blue'>Mentor Name</label>
                        <input 
                            className='mx-4 bg-hex-lightgrey px-2 outline-none rounded-md'
                            type="text" 
                            id='mentor_name'
                            value={mentorName}
                            placeholder='Mentor Name'
                            onChange={(e)=>setMentorName(e.target.value)}
                            required
                        />
                    </div>
                    <button type='submit' className='bg-hex-blue text-hex-lightgrey p-2 rounded-md'>Add Mentee</button>
                </form>
            </div>
        </div>
    )
}

export default AddMenteeDashBoard