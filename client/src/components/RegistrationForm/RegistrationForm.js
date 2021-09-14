import React, {useState} from "react";
import './RegistrationForm.css'
import {registration} from "../../actions/auth";

export const RegistrationForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    // Validation
    // const phoneRegExp = /^((?:[1-9][0-9 ().-]{5,28}[0-9])|(?:(00|0)( ){0,1}[1-9][0-9 ().-]{3,26}[0-9])|(?:(\+)( ){0,1}[1-9][0-9 ().-]{4,27}[0-9]))$/gm
    // const passwordRegExp = /^[a-zA-Z0-9!@#$%^&*()_+=~/-]{6,120}$/

    return (
        <div className={'registration-form'}>
            <div className={'form'}>
                <h1 className={'form-header'}>Registration</h1>
                <p>
                    <label htmlFor={'name'}>Name</label><br/>
                    <input type={'text'} placeholder={'Name'} value={name}
                           onChange={event => setName(event.target.value)}/>
                </p>

                <p>
                    <label htmlFor={'phone'}>Phone</label><br/>
                    <input type={'text'} placeholder={'Phone'} value={phone}
                           onChange={event => setPhone(event.target.value)}/>
                </p>

                <p>
                    <label htmlFor={'email'}>Email</label><br/>
                    <input type={'email'} placeholder={'Email'} value={email}
                           onChange={event => setEmail(event.target.value)}/>
                </p>

                <p>
                    <label htmlFor={'password'}>Password</label><br/>
                    <input type={'password'} placeholder={'Password'} value={password}
                           onChange={event => setPassword(event.target.value)}/>
                </p>

                <p>
                    <label htmlFor={'confirmPassword'}>Confirm Password</label><br/>
                    <input type={'password'} placeholder={'Confirm Password'} value={confirmPassword}
                           onChange={event => setConfirmPassword(event.target.value)}/>
                </p>

                <button type={'submit'} onClick={() => registration(name, phone, email, password)}>Register</button>

                {/*    Login Link*/}
                <p className={'login-link'}>Already have an account? &nbsp;
                    <a href={'/auth/login'}>Login</a>
                </p>
            </div>

        </div>
    )
}
