import React, { useCallback } from 'react'
import Paper from '@material-ui/core/Paper'
import Container from '../components/Container'
import { capitalize, getFormConfig, validateFields } from '../helpers/common'
import Form from '../components/Form'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import AppBar from '@material-ui/core/AppBar'
import { passwordsDoNotMatch } from '../constants'

const tabs = {
    login: 'login',
    register: 'register',
}

const fields = {
    [tabs.login]: [
        { name: 'email', type: 'email' },
        { name: 'password', type: 'password' },
    ],
    [tabs.register]: [
        { name: 'username', type: 'text' },
        { name: 'email', type: 'email' },
        { name: 'password', type: 'password' },
        { name: 'repeat_password', type: 'password' },
    ],
}

const authConfig = {
    [tabs.login]: getFormConfig(fields.login),
    [tabs.register]: getFormConfig(fields.register),
}

export default function Auth({ login, register }) {
    const [tab, setTab] = React.useState(tabs.login)

    const onSubmit = (values) => {
        if (tab === tabs.login) {
            login(values)
        } else {
            register(values)
        }
    }

    const handleChange = (_, value) => {
        setTab(Object.values(tabs)[value])
    }

    const validate = {
        [tabs.login]: (values) => {
            const errors = validateFields(
                values,
                fields[tab].map((item) => item.name)
            )
            return errors
        },
        [tabs.register]: (values) => {
            const errors = validateFields(
                values,
                fields[tab].map((item) => item.name)
            )
            if (values.password !== values.repeat_password) {
                errors.password = passwordsDoNotMatch;
                errors.repeat_password = passwordsDoNotMatch;
            }
            return errors
        },
    }
    return (
        <Container>
            <AppBar position="static">
                <Tabs variant="fullWidth" value={tab} onChange={handleChange}>
                    {Object.values(tabs).map((tab) => (
                        <Tab label={capitalize(tab)} />
                    ))}
                </Tabs>
            </AppBar>
            <Paper>
                <Form
                    fields={authConfig[tab]}
                    onSubmit={onSubmit}
                    variant="filled"
                    validate={validate[tab]}
                    label={capitalize(tab)}
                />
            </Paper>
        </Container>
    )
}
