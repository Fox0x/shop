import React, {useState} from "react";
import './LoginForm.css'
import {login} from "../../http/auth";
import {Link} from "react-router-dom";
import StyledInput from "../UI/StyledInput/StyledInput";

export const LoginForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // Validation
    // const phoneRegExp = /^((?:[1-9][0-9 ().-]{5,28}[0-9])|(?:(00|0)( ){0,1}[1-9][0-9 ().-]{3,26}[0-9])|(?:(\+)( ){0,1}[1-9][0-9 ().-]{4,27}[0-9]))$/gm
    // const passwordRegExp = /^[a-zA-Z0-9!@#$%^&*()_+=~/-]{6,120}$/
    return (
        <div className={'login-form'}>


            <div className={'form'}>
                <h1 className={'form-header'}>Login</h1>
                {/*Email input*/}
                <StyledInput
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    type={'text'}
                    placeholder={'Email'}
                    htmlFor={'email'}>
                    Email
                </StyledInput>
                {/*Password input*/}
                <StyledInput
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    type={'password'}
                    placeholder={'Password'}
                    htmlFor={'password'}>
                    Password
                </StyledInput>
                {/*Submit button*/}
                <button onClick={() => login(email, password)} type={'submit'}>Login</button>
                {/*Registration link*/}
                <p className={'registration-link'}>Not registered yet? &nbsp;
                    <Link to={'/auth/registration'}>Registration</Link>
                </p>
            </div>


        </div>
    )
}
