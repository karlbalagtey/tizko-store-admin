import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
// import jwtDecode from 'jwt-decode';

const PrivateRoute = ({ children, ...rest }) => (
    <Route
        {...rest}
        render={({ location }) =>
            localStorage.getItem('user') ? (
                children
            ) : (
                <Redirect
                    to={{
                        pathname: '/',
                        state: { from: location },
                    }}
                />
            )
        }
    />
);

export default PrivateRoute;
