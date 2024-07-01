import React, { useState } from 'react';
import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import '../Styles/UserMenu.css';

const UserMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [loginOpen, setLoginOpen] = useState(false);
    const [signupOpen, setSignupOpen] = useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setLoginOpen(false);
        setSignupOpen(false);
    };

    const handleLogin = () => {
        setLoginOpen(true);
        setAnchorEl(null); // Close the menu after clicking Login
    };

    const handleSignup = () => {
        setSignupOpen(true);
        setAnchorEl(null); // Close the menu after clicking Signup
    };

    return (
        <div>
            <div className="icon">
                <IconButton
                    className='iconButton'
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleClick}
                    color="inherit"
                >
                    <AccountCircleIcon className='accountIcon' />
                </IconButton>
            </div>
            <Menu
                id="menu-appbar"
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
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleLogin}>Login</MenuItem>
                <MenuItem onClick={handleSignup}>Signup</MenuItem>
                <MenuItem onClick={handleClose}>User Profile</MenuItem>
            </Menu>
            {loginOpen && <LoginForm onClose={handleClose} />}
            {signupOpen && <SignupForm onClose={handleClose} />}
        </div>
    );
};

export default UserMenu;
