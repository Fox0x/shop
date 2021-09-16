import React, {useState} from "react";
import './LoginForm.css'
import {login} from "../../http/auth";

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
                <p>
                    <label htmlFor={'email'}>Email</label><br/>
                    <input type={'text'} placeholder={'Email'} value={email}
                           onChange={event => setEmail(event.target.value)}/>
                </p>
                {/*Password input*/}
                <p>
                    <label htmlFor={'password'}>Password</label><br/>
                    <input type={'password'} placeholder={'Password'} value={password}
                           onChange={event => setPassword(event.target.value)}/>
                </p>
                {/*Submit button*/}
                <button onClick={() => login(email, password)} type={'submit'}>Login</button>
                {/*Registration link*/}
                <p className={'registration-link'}>Not registered yet? &nbsp;
                    <a href={'/auth/registration'}>Registration</a>
                </p>
            </div>


        </div>
    )
}
