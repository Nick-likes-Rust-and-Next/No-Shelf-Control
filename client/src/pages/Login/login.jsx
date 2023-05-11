import React from 'react';
import { TextField, Button } from '@mui/material';
import './login.scss';

function Login() {
  return (
    <div className='login-page'>
        <div className='login-container'>
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
                <Button variant='outlined' type='submit'>Submit</Button>
            </form>
        </div>
    </div>
  )
}

export default Login;