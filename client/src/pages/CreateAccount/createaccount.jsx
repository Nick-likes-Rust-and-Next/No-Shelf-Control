import './createaccount.scss';
import react from 'react';
import { TextField, Button } from '@mui/material';


function CreateAccount() {
    return (
        <div className='createaccount-page'>
            <div className='createaccount-container'>
                <div className='createaccount-image-container'>
                    <img id='createaccount-image' src='/images/CreateAccountTransparent.png'/>
                </div>
                <div className='createaccount-form-container'>
                    <h2>Create an Account!</h2>
                    <form className='createaccount-form'>
                        <TextField
                            required
                            type='text'
                            id='first-name-required'
                            placeholder='Enter First Name'
                        />
                        <TextField
                            required
                            type='text'
                            id='last-name-required'
                            placeholder='Enter Last Name'
                        />
                        <TextField
                            required
                            type='text'
                            id='username-required'
                            placeholder='Enter Username'
                        />
                        <TextField
                            required
                            type='email'
                            id='email-required'
                            placeholder='Enter Email'
                        />
                        <TextField
                            required
                            type='password'
                            id='password1-required'
                            placeholder='Enter Password'
                        />
                        <TextField
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