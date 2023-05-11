import './createaccount.scss';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import { TextField, Button } from '@mui/material';
import Auth from '../../utils/auth';

function CreateAccount() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const [addUser, { error, data }] = useMutation(ADD_USER);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        
        try {

            const mutationResponse = await addUser({
                variables: {
                    firstName,
                    lastName,
                    username,
                    email,
                    password,
                }
            });

            const token = mutationResponse.data.addUser.token;

            Auth.login(token);

        } catch (err) {
            console.log(err);
        }
    
    }
        
    return (
        <div className='createaccount-page'>
            <div className='createaccount-container'>
                <div className='createaccount-image-container'>
                    <img id='createaccount-image' src='/images/CreateAccountTransparent.png'/>
                </div>
                <div className='createaccount-form-container'>
                    <h2>Create an Account!</h2>
                    <form className='createaccount-form' onSubmit={handleFormSubmit}>
                        <TextField
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                          type='text'
                          id='first-name-required'
                          placeholder='Enter First Name'
                        />
                        <TextField
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          required
                          type='text'
                          id='last-name-required'
                          placeholder='Enter Last Name'
                        />
                        <TextField
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                          type='text'
                          id='username-required'
                          placeholder='Enter Username'
                        />
                        <TextField
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           required
                           type='email'
                           id='email-required'
                           placeholder='Enter Email'
                        />
                        <TextField
                           value={password2}
                           onChange={(e) => setPassword2(e.target.value)}
                           required
                           type='password'
                           id='password1-required'
                           placeholder='Enter Password'
                        />
                        <TextField
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           required
                           type='password'
                           id='password2-required'
                           placeholder='Re-Enter Password'
                        />  
                        <Button
                            variant='outlined' 
                            type='submit'
                            id='createaccount-submit-btn'
                        >
                            Submit
                        </Button>
                    </form>
                    <div className='login-link-container'>
                        <p>Already have an account? <a href='/login'>Login here!</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount;