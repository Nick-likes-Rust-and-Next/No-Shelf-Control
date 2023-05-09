import React from 'react'

function Login() {
  return (
    <div className='page'>
        <div className='login-form-container'>
            <form action='/api/user/id' method='post'>
                <input type='email' placeholder='Enter Email' name='email' required/>
                <input type='password' placeholder='Enter Password' name='password' required/>
                <button type='submit'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login;