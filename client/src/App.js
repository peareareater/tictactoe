import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import routes from './router/routes'
import Route from './router/Route'
import AppBar from './containers/AppBar'
import { connect } from 'react-redux'
import SnackBars from './containers/SnackBars'

function App({ isAuthenticated }) {
    return (
        <>
            <Router>
                <AppBar isAuthenticated={isAuthenticated} />
                <Switch>
                    {routes.map((route) => (
                        <Route
                            route={route}
                            isAuthenticated={isAuthenticated}
                        />
                    ))}
                </Switch>
            </Router>
            <SnackBars />
        </>
    )
}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.user.isAuthenticated,
    }
}

export default connect(mapStateToProps)(App)
