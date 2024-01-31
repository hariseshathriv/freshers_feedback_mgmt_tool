import React from 'react'

function Login() {
  return (
    <div className='loginBox'>
        <div className='login'>
            <h2 className='text-3xl loginHeading'>LOGIN</h2>
            <form class="loginForm">
                    <div class="mb-5  loginDiv">
                        <label for="email"className='text-xl loginLabel'>Email</label>
                        <input type="email" id="email" className="loginInput" placeholder="name@jman.com" required />
                    </div>
                    <div class="mb-5 loginDiv">
                        <label for="password"className='text-xl loginLabel'>Password</label>
                        <input type="password" id="password" className="loginInput" placeholder='********' required />
                    </div>
                    <button type="submit" className='text-2xl loginBtn'>Login</button>
                </form>
        </div>
    </div>
  )
}

export default Login