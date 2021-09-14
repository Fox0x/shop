import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {RegistrationPage} from "./pages/RegistrationPage/RegistrationPage";
import {LoginPage} from "./pages/LoginPage/LoginPage";
import {ShopPage} from "./pages/ShopPage/ShopPage";

export const Routes = () => {

    const refreshToken = localStorage.getItem('token')

    if (refreshToken) {
        return (
            <Switch>
                {/*SHOP*/}
                <Route path={"/shop"}>
                    <ShopPage/>
                </Route>
                {/*LOGIN*/}
                <Route path="/auth/login">
                    <LoginPage/>
                </Route>
                {/*REGISTRATION*/}
                <Route path="/auth/registration">
                    <RegistrationPage/>
                </Route>
                <Route path={"/"}>
                    <ShopPage/>
                </Route>
                <Redirect to="/"/>
            </Switch>
        )
    } else {
        return (
            <Switch>
                {/*REGISTRATION*/}
                <Route path="/auth/registration">
                    <RegistrationPage/>
                </Route>
                {/*LOGIN*/}
                <Route path="/auth/login">
                    <LoginPage/>
                </Route>
                <Redirect to="/auth/login"/>
            </Switch>
        )
    }
}
