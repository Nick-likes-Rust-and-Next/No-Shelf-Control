import React from 'react';
import { TextField, Button } from '@mui/material';
import './login.scss';

function Login() {
  return (
    <div className='login-page'>
        <div className='login-container'>
            <div className='login-image-container'>
                <img id='login-image' src='/images/LoginImageTransparent.png'/>
            </div>
            <div className='login-form-container'>
                <h2>Login!</h2>
                <form className='login-form' action='/api/user/id' method='post'>
                    <TextField
                        required
                        type='email'
                        id='email-required'
                        placeholder='Enter Email' />
                    <TextField
                        required
                        type='password'
                        id='password-required'
                        placeholder='Enter Password' />
                    <Button
                        variant='outlined' 
                        type='submit'
                        id='login-submit-btn'
                    >
                        Submit
                    </Button>
                </form>
                <div className='createaccount-link-container'>
                    <p>Don't have an account? <a href='/createaccount'>Create one here!</a></p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Login;