import React from 'react'
import './App.css'
import { Router, Switch, Route } from 'react-router-dom'
import routes from './router/routes'
import AppBar from './containers/AppBar'
import { connect } from 'react-redux'
import { v4 } from 'uuid'
import history from './lib/history'
import NotFound from './pages/NotFound'

function App({ isAuthenticated }) {
    return (
        <Router history={history}>
            <AppBar isAuthenticated={isAuthenticated} />
            <Switch>
                {routes.map((route) => {
                    return (
                        <Route
                            key={v4()}
                            path={route.path}
                            exact={route.exact}
                            component={route.component}
                        />
                    )
                })}
                <Route path="*" component={NotFound}>
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    )
}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.user.isAuthenticated,
    }
}

export default connect(mapStateToProps)(App)
