import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function RouteWithAuth({ route, isAuthenticated }) {
    const Component = route.component;
    console.log(isAuthenticated, 'isAuthenticated');
    return  (
        <Route path={route.path}>
            <Component/>
        </Route>
    )
}

RouteWithAuth.propTypes = {
    route: PropTypes.object,
    isAuthenticated: PropTypes.bool,
}
