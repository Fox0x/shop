import {ShopPage} from "../pages/ShopPage/ShopPage";
import {LoginPage} from "../pages/LoginPage/LoginPage";
import {RegistrationPage} from "../pages/RegistrationPage/RegistrationPage";

export const privateRoutes = [
    {path: '/shop', component: ShopPage, exact: true},
    {path: '/auth/login', component: LoginPage, exact: true},
    {path: '/auth/registration', component: RegistrationPage, exact: true},
]

export const publicRoutes = [
    {path: '/shop', component: ShopPage, exact: true},
    {path: '/auth/login', component: LoginPage, exact: true},
    {path: '/auth/registration', component: RegistrationPage, exact: true},
]
