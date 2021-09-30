import {ShopPage} from "../pages/ShopPage/ShopPage";
import {LoginPage} from "../pages/LoginPage/LoginPage";
import {RegistrationPage} from "../pages/RegistrationPage/RegistrationPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import CartPage from "../pages/CartPage/CartPage";

export const privateRoutes = [
    {path: '/shop', component: ShopPage, exact: true},
    {path: '/auth/login', component: LoginPage, exact: true},
    {path: '/auth/registration', component: RegistrationPage, exact: true},
    {path: '/about', component: AboutPage, exact: true},
    {path: '/contacts', component: ContactPage, exact: true},
    {path: '/cart', component: CartPage, exact: true},
]

export const publicRoutes = [
    {path: '/shop', component: ShopPage, exact: true},
    {path: '/auth/login', component: LoginPage, exact: true},
    {path: '/auth/registration', component: RegistrationPage, exact: true},
]
