import React from 'react'

function MentorRegistration() {
  return (
    <div className='mentorBox'>
        <div className='mentor'>
            <h2 className='text-3xl mentorHeading'>MENTOR REGISTRATION</h2>
            <form class="mentorForm">
                    <div class="mb-2  mentorDiv">
                        <label for="email" className='text-xl mentorLabel'>Email</label>
                        <input type="email" id="email" className="mentorInput" required />
                    </div>
                    <div class="mb-2  mentorDiv">
                        <label for="name" className='text-xl mentorLabel'>Name</label>
                        <input type="text" className="mentorInput" required />
                    </div>
                    <div class="mb-2  mentorDiv">
                        <label for="name" className='text-xl mentorLabel'>Designation</label>
                        <input type="text" className="mentorInput" required />
                    </div>
                    <div class="mb-2  mentorDiv">
                        <label for="gender" className='text-xl mentorLabel'>Gender</label>
                        <input type="gender" className="mentorInput" required />
                    </div>
                    <div class="mb-2  mentorDiv">
                        <label for="name" className='text-xl mentorLabel'>D.O.B</label>
                        <input type='date' className="mentorInput" required />
                    </div>
                    <div class="mb-2  mentorDiv">
                        <label for="password" className='text-xl mentorLabel'>Password</label>
                        <input type="password" className="mentorInput" required />
                    </div>
                    <div class="mb-2  mentorDiv">
                        <label for="password" className='text-xl mentorLabel'>Confirm Password</label>
                        <input type="password" className="mentorInput" required />
                    </div>
                    <div class="mb-2  mentorDiv">
                        <label for="name" className='text-xl mentorLabel'>Mobile No.</label>
                        <input type="tel" className="mentorInput" required />
                    </div>
                    <button type="submit" className='text-2xl mentorBtn'>Submit</button>
                </form>
        </div>
    </div>
  )
}

export default MentorRegistration