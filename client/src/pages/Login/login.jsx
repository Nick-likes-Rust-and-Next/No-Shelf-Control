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
            <form className='login-form' onSubmit={handleFormSubmit}>
                <TextField
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    type='email'
                    id='email-required'
                    placeholder='Enter Email' />
                <TextField
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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