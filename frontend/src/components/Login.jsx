import React,{useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';

function Login() {
  const [formData, setFormData] = useState({
    email:'',
    password:''
});

const navigate = useNavigate();

const [apiResponse, setApiResponse] = useState(null);

const {user, setUserContext} = useContext(UserContext);

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:3001/api/users/login'
    , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();
    setApiResponse(data.message); 
    setUserContext(data) //update the user data here
    alert('Login is successful');
   navigate('/mentorDashboard');
  } catch (error) {
    console.error('Error:', error);
    setApiResponse('An error occurred. Please try again.');
  }
};

  return (
    <div className='loginBox'>
        <div className='login'>
            <h2 className='text-3xl loginHeading'>LOGIN</h2>
            <form className="loginForm" >
                    <div className="mb-5  loginDiv">
                        <label htmlFor="email"className='text-xl loginLabel'>Email</label>
                        <input name="email" type="email" id="email" className="loginInput outline-none" placeholder="name@jman.com" required onChange={handleInputChange}/>
                    </div>
                    <div className="mb-5 loginDiv">
                        <label htmlFor="password"className='text-xl loginLabel'>Password</label>
                        <input name="password" type="password" id="password" className="loginInput outline-none" placeholder='********' required onChange={handleInputChange}/>
                    </div>
                    <button type="submit" className='text-2xl loginBtn' onClick={handleSubmit}>Login</button>

                    <a href="/" className='mt-4 text-xl underline'>Forgot Password?</a>
                </form>
        </div>
        <a href="/registration" className='mt-8 text-xl underline'>New User? Register</a>
    </div>
  )
}

export default Login

// http://localhost:3001/api/users/login