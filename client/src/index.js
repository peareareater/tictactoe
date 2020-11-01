import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { configureStore, store } from './store'
import { MuiThemeProvider, CssBaseline } from '@material-ui/core'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import blue from '@material-ui/core/colors/blue'
import history from './lib/history';

const theme = createMuiTheme({
    palette: {
        primary: blue,
        text: {
            primary: '#616262',
            secondary: '#616262',
        },
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                html: {
                    WebkitFontSmoothing: 'auto',
                },
            },
        },
    },
});


ReactDOM.render(
        <Provider store={configureStore(history)}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </MuiThemeProvider>
        </Provider>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
