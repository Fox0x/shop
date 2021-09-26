import React, {useContext} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {privateRoutes, publicRoutes} from '../../router/routes'
import {GlobalContext} from "../../context";

const AppRouter = () => {
    const {isAuth} = useContext(GlobalContext)
    return (
        isAuth
            ?
            <Switch>
                {
                    privateRoutes.map((route, index) =>
                        <Route
                            key={index}
                            path={route.path}
                            component={route.component}
                            exact={route.exact}/>
                    )
                }
                <Redirect to='/shop'/>
            </Switch>
            :
            <Switch>
                {
                    publicRoutes.map((route, index) =>
                        <Route
                            key={index}
                            path={route.path}
                            component={route.component}
                            exact={route.exact}/>
                    )
                }
                <Redirect to='/auth/login'/>
            </Switch>
    )
};

export default AppRouter;