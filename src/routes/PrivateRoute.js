import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, roles, authUser, ...rest }) => (
    <Route {...rest} render={props => {

        if (!authUser.isLogin || roles.indexOf(authUser.role) === -1){
            return <Redirect to={{ pathname: '/'}} />
        }
        
        return <Component {...props} />
    }} />
)