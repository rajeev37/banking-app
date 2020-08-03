import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from "./auth";

export const PrivateRoute = ({ component: Component, roles, ...rest }) => (
    <Route {...rest} render={props => {
        console.log("*****1*****", roles.indexOf("Admin"));
        console.log("****2******", roles);

        // TODO.. Make role dynamic based on user login.
        if (!auth.isAuthenticated() || roles.indexOf("Admin") === -1){
            return <Redirect to={{ pathname: '/'}} />
        }
        return <Component {...props} />
    }} />
)