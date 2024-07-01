import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Menu, MenuItem, Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import '../Styles/AdminDashboard.css';

const AdminDashboard = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="appBar">
        <Toolbar>
          <IconButton
            edge="start"
            aria-label="menu"
            onClick={handleMenuClick}
            className="menuButton"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Manage Bookings</MenuItem>
            <MenuItem onClick={handleMenuClose}>Manage Users</MenuItem>
          </Menu>
          <div className="search">
            <div className="searchIconWrapper">
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              className="inputRoot"
            />
          </div>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ padding: 2 }}>
        {/*  main content goes here */}
      </Box>
    </Box>
  );
};

export default AdminDashboard;
