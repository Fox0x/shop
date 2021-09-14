import React from "react";
import './NavbarComponent.css'

export const NavbarComponent = () => {
    return (
        <div className={'navbar-component'}>
            <nav>
                <a href="/shop" className="logo">
                    <img
                        src={"https://www.freelogoservices.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6khvKAqx9OmBfNwXs1M3EMoAJtliIkhfJj9Po9"}
                        alt={'logo'}/></a>
                <ul>
                    <li>
                        <a href="/shop">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
                <a href={'/auth/login'} className={'login-button'}>
                    <img src={'https://randomuser.me/api/portraits/men/11.jpg'}
                         alt={'#'}/>
                    Login
                </a>
            </nav>
        </div>
    )
}