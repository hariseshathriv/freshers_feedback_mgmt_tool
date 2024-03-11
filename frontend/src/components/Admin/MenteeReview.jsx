import React,{useState, useEffect} from 'react'

const MenteeReview = ({id , name}) => {
  const [mentee, setMentee] = useState({});
  const [comments, setComments] = useState([])
  const fetchMenteeData = async()=>{
    console.log(id);
    const url = "http://localhost:3001/api/users/get-comments/"+id;
    try {
      const res = await fetch(url,{
        method : 'GET',
        headers:{
          "Content-Type":"application/json",
        },
      })
      const data = await res.json();
      console.log(data);
      console.log(data.data);
      if(data.data) setComments(data.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(()=>{
    fetchMenteeData();
  },[name])
  return (
    <div>
        <div className='px-20'>
            <div className='text-[#19105B] text-xl font-bold py-8'>Feedback for {name}</div>
            <div className='bg-[#19105B] text-[#F2F1F6] p-2 flex justify-between'>
                <div className='px-1 text-xl w-1/12'>Week</div>
                <div className='px-5 text-xl w-10/12 text-center'>Comments</div>
            </div>
            {
              comments.length>0 && 
                comments.map((eachComment)=>(
                  <div className='bg-hex-grey p-2 flex justify-between' key={eachComment.week}>
                    <div className='px-1 w-1/12'>Week {eachComment.week}</div>
                    <div className="px-5 w-10/12">{eachComment.comment}</div>
                  </div>
                ))
            }
        </div>
    </div>
  )
}

export default MenteeReview