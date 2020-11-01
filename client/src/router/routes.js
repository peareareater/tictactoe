import Auth from '../containers/Auth'
import Main from '../containers/Main'

export default [
    { path: '/auth', component: Auth, exact: true },
    { path: '/', component: Main, exact: true },
]
