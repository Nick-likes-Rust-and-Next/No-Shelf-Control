import './createaccount.scss';
import react from 'react';
import { TextField, Button } from '@mui/material';


function CreateAccount() {
    return (
        <div className='createaccount-page'>
            <div className='createaccount-header'>
                <h2>
                    Create an Account!
                </h2>
            </div>
            <div className='createaccount-field-container'>
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
                    <Button variant='outlined' type='submit'>Submit</Button>
                </form>
            </div>
        </div>
    )
}

export default CreateAccount;