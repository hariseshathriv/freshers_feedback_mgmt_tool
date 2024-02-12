import React,{useState} from 'react'

function MentorRegistration() {
        const [formData, setFormData] = useState({
            email:'',
            name:'',
            password:'',
            dob:'',
            designation:'',
            gender:'',
            mobile_no:''
        });
      
        const [apiResponse, setApiResponse] = useState(null);
      
        const handleInputChange = (e) => {
          const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });
        };
      
        const handleSubmit = async (e) => {
          e.preventDefault();
      
          try {
            const response = await fetch('http://localhost:3001/api/users/registration'
            , {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
            });
      
            const data = await response.json();
            setApiResponse(data.message);
            alert('Registration is successful')
            // console.log(data);
            window.location.href="http://localhost:5173/"
          } catch (error) {
            console.error('Error:', error);
            setApiResponse('An error occurred. Please try again.');
          }
        };

  return (
    <div className='mentorBox'>
        <div className='mentor'>
            <h2 className='text-3xl mentorHeading'>MENTOR REGISTRATION</h2>
            <form class="mentorForm">
                    <div class="mb-2  mentorDiv">
                        <label for="email" className='text-xl mentorLabel'>Email</label>
                        <input name="email" type="email" id="email" className="mentorInput" required onChange={handleInputChange}/>
                    </div>
                    <div class="mb-2  mentorDiv">
                        <label for="name" className='text-xl mentorLabel'>Name</label>
                        <input name="name" type="text" className="mentorInput" required onChange={handleInputChange}/>
                    </div>
                    <div class="mb-2  mentorDiv">
                        <label for="name" className='text-xl mentorLabel'>Designation</label>
                        <input name='designation' type="text" className="mentorInput" required onChange={handleInputChange}/>
                    </div>
                    <div class="mb-2  mentorDiv">
                        <label for="gender" className='text-xl mentorLabel'>Gender</label>
                        <input name="gender" type="gender" className="mentorInput" required onChange={handleInputChange}/>
                    </div>
                    <div class="mb-2  mentorDiv">
                        <label for="name" className='text-xl mentorLabel'>D.O.B</label>
                        <input name="dob" type='date' className="mentorInput" required onChange={handleInputChange}/>
                    </div>
                    <div class="mb-2  mentorDiv">
                        <label for="password" className='text-xl mentorLabel'>Password</label>
                        <input name="password" type="password" className="mentorInput" required onChange={handleInputChange}/>
                    </div>
                    <div class="mb-2  mentorDiv">
                        <label for="password" className='text-xl mentorLabel'>Confirm Password</label>
                        <input name="confirm_password"
                        type="password" className="mentorInput" required />
                    </div>
                    <div class="mb-2  mentorDiv">
                        <label for="name" className='text-xl mentorLabel'>Mobile No.</label>
                        <input name="mobile_no" 
                            type="tel" 
                            className="mentorInput" 
                            required 
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit" className='text-2xl mentorBtn' onClick={handleSubmit}>Submit</button>
                </form>
        </div>
    </div>
  )
}

export default MentorRegistration