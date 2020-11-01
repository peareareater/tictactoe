import React from 'react'
import Paper from '@material-ui/core/Paper'
import Container from '../components/Container'
import { capitalize, getFormConfig, validateFields } from '../helpers/common'
import Form from '../components/Form'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import AppBar from '@material-ui/core/AppBar'
import { passwordsDoNotMatch } from '../constants'
import { v4 } from 'uuid'
import { authConfig, fields, tabs } from '../constants/auth'

export default function Auth({ login, register, user, removeError, location }) {
    const initialTab = location.state && location.state.tab || 0
    const [tab, setTab] = React.useState(initialTab)
    const tabKeys = Object.values(tabs)
    const tabName = tabKeys[tab]

    const onSubmit = (values) => {
        if (tabName === tabs.login) {
            login(values)
        } else {
            register(values)
        }
    }

    const handleChange = (_, value) => {
        removeError()
        setTab(value)
    }

    const validate = {
        [tabs.login]: (values) => {
            return validateFields(
                values,
                fields[tabName].map((item) => item.name)
            )
        },
        [tabs.register]: (values) => {
            const errors = validateFields(
                values,
                fields[tabName].map((item) => item.name)
            )
            if (values.password !== values.repeat_password) {
                errors.password = passwordsDoNotMatch
                errors.repeat_password = passwordsDoNotMatch
            }
            return errors
        },
    }
    return (
        <Container maxWidth={700}>
            <AppBar position="static">
                <Tabs variant="fullWidth" value={tab} onChange={handleChange}>
                    {Object.values(tabs).map((tabTitle) => (
                        <Tab key={v4()} label={capitalize(tabTitle)} />
                    ))}
                </Tabs>
            </AppBar>
            <Paper>
                <Form
                    loading={user.loading}
                    error={user.error}
                    fields={authConfig[tabName]}
                    onSubmit={onSubmit}
                    variant="filled"
                    validate={validate[tabName]}
                    label={capitalize(tabName)}
                />
            </Paper>
        </Container>
    )
}
