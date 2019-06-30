import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({component: Component, isloggedIn, ...rest}) => {
    console.log(isloggedIn)
    return (
        <Route {...rest} render={props => (
            isloggedIn === true ?
                <Component {...props} /> :
                <Redirect to="/Login" /> 
        )} />
    )
}

export default PrivateRoute;