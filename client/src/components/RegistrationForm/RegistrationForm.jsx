import React, {useState} from "react";
import './RegistrationForm.css'
import {registration} from "../../http/auth";
import {Link} from "react-router-dom";
import StyledInput from "../UI/StyledInput/StyledInput";

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
                <StyledInput
                    value={name}
                    onChange={event => setName(event.target.value)}
                    type={'text'}
                    placeholder={'Name'}
                    htmlFor={'name'}>
                    Name
                </StyledInput>

                <StyledInput
                    value={phone}
                    onChange={event => setPhone(event.target.value)}
                    type={'text'}
                    placeholder={'Phone'}
                    htmlFor={'phone'}>
                    Phone
                </StyledInput>

                <StyledInput
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    type={'text'}
                    placeholder={'Email'}
                    htmlFor={'email'}>
                    Email
                </StyledInput>

                <StyledInput
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    type={'password'}
                    placeholder={'Password'}
                    htmlFor={'password'}>
                    Password
                </StyledInput>

                <StyledInput
                    value={confirmPassword}
                    onChange={event => setConfirmPassword(event.target.value)}
                    type={'password'}
                    placeholder={'Confirm Password'}
                    htmlFor={'confirmPassword'}>
                    Confirm password
                </StyledInput>

                <button type={'submit'} onClick={() => registration(name, phone, email, password)}>Register</button>

                {/*    Login Link*/}
                <p className={'login-link'}>Already have an account? &nbsp;
                    <Link to={'/auth/login'}>Login</Link>
                </p>
            </div>

        </div>
    )
}
