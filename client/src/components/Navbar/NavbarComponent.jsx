import './NavbarComponent.css'
import {useContext} from "react";
import {GlobalContext} from "../../context";

export const NavbarComponent = () => {

    const {isAuth} = useContext(GlobalContext)

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
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="contact">Contact</a>
                    </li>
                </ul>
                {
                    isAuth
                        ? <a href={'/cart'} className={'cart-button'}>
                            Cart
                        </a>
                        : <a href={'/auth/login'} className={'login-button'}>
                            Login
                        </a>
                }
            </nav>
        </div>
    )
}