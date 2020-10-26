import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import { AccountCircle } from '@material-ui/icons'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { withRouter } from 'react-router'
import userActions from '../../actions/user'
import { connect } from 'react-redux'

function AppTabMenu({ isAuthenticated, history }) {
    const [open, setOpen] = React.useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setOpen((open) => !open)
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(false)
        setAnchorEl(null);
    };

    const login = () => {
        handleClose()
        history.push('/auth')
    }
    const logout = () => {

    }
    return (
        <div>
            <IconButton onClick={handleMenu}>
                <AccountCircle />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
            >
                {isAuthenticated ? (
                    <MenuItem onClick={logout}>Log Out</MenuItem>
                ) : (
                    <MenuItem onClick={login}>Login</MenuItem>
                )}
            </Menu>
        </div>
    )
}

export default withRouter(connect(null, { logout: userActions.logout })(AppTabMenu))
