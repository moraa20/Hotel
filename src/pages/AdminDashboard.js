import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Menu, MenuItem, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import '../Styles/AdminDashboard.css';
//import './ManageBookings';

const AdminDashboard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Perform search for:', searchQuery);
    if (searchQuery.toLowerCase() === 'rooms') {
      navigate('/restaurant');
    } else if (searchQuery.toLowerCase() === 'restaurant' || searchQuery.toLowerCase() === 'table') {
      navigate('/restaurant');
    } else if (searchQuery.toLowerCase() === 'offers') {
      navigate('/offers');
    } else if (searchQuery.toLowerCase() === 'contacts') {
      navigate('/contact');
    } else if (searchQuery.toLowerCase() === 'menu') {
      navigate('/menu');
    } else {
      console.log('Unknown search query:', searchQuery);
    }
  };

  const handleManageBookings = () => {
    navigate('/ManageBookings');
    handleMenuClose();
  }
  const handleManageUsers = () => {
    navigate('/ManageUsers');
    handleMenuClose();
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'black' }} className="appBar">
        <Toolbar>
          <IconButton
            edge="start"
            aria-label="menu"
            onClick={handleMenuClick}
            className="menuButton"
          >
            <MenuIcon className='icon' />
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
            <MenuItem onClick={handleManageBookings}>Manage Bookings</MenuItem>
            <MenuItem onClick={handleManageUsers}>Manage Users</MenuItem>
          </Menu>
          <form onSubmit={handleSearchSubmit} className="search">
            <div className="searchIconWrapper">
              <SearchIcon />
            </div>
            <InputBase
              placeholder="search..."
              inputProps={{ 'aria-label': 'search' }}
              className="inputRoot"
              value={searchQuery}
              onChange={handleInputChange}
            />
          </form>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ padding: 2 }}>
        {/* main content goes here */}
      </Box>
    </Box>
  );
};

export default AdminDashboard;
