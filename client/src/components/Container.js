import React from 'react'
import Paper from '@material-ui/core/Paper'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useRootStyles = makeStyles((theme) => ({
    container: {
        width: '50%',
        margin: '10rem auto',
        padding: '20px 40px',
    },
}))

export default function Container({ children }) {
    const root = useRootStyles()

    return <div className={root.container}>{children}</div>
}
