import React,{useState, useEffect} from 'react'

const MenteeReview = ({mentee}) => {
  const [Comments, setComments] = useState([])
  useEffect(()=>{

  },[])
  return (
    <div>
        <div className='px-20'>
            <div className='text-[#19105B] text-xl font-bold py-8'>Feedback for {mentee}</div>
            <div className='bg-[#19105B] text-[#F2F1F6] p-2 flex justify-between'>
                <div className='px-1 text-xl w-1/12'>Week</div>
                <div className='px-5 text-xl w-10/12 text-center'>Comments</div>
            </div>
            {
              Comments.length>0 && 
                Comments.map((eachComment)=>(
                  <div className='bg-hex-grey p-2 flex justify-between'>
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