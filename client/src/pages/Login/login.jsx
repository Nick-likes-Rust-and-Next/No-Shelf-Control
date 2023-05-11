import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import './login.scss';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, { error, data }] = useMutation(LOGIN_USER);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {

            const mutationResponse = await login({
                variables: {
                    email,
                    password
                }
            });

            const token = mutationResponse.data.login.token;

            Auth.login(token);

        } catch (err) {
            console.log(err);
        }

        setEmail('');
        setPassword('');

    };

  return (
    <div className='login-page'>
        <div className='login-container'>
            <div className='login-image-container'>
                <img id='login-image' src='/images/LoginImageTransparent.png'/>
            </div>
            <div className='login-form-container'>
                <h2>Login!</h2>
                <form className='login-form' onSubmit={handleFormSubmit}>
                    <TextField
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      type='email'
                      id='email-required'
                      placeholder='Enter Email' 
                    />
                    <TextField
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      type='password'
                      id='password-required'
                      placeholder='Enter Password' 
                    />
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