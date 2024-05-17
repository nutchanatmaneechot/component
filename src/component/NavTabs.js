import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SearchIcon from '@mui/icons-material/Search'; 
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Logo from '../assets/logo-stsp.png';
import { Link } from 'react-router-dom'; 
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';

function samePageLinkNavigation(event) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || 
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

function LinkTab(props) {
  return (
    <Tab
      component={Link} 
      to={props.to} 
      onClick={(event) => {
        if (samePageLinkNavigation(event)) {
          event.preventDefault();
        }
      }}
      aria-current={props.selected && 'page'}
      {...props}
    />
  );
}

LinkTab.propTypes = {
  selected: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

export default function NavTabs() {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSearch = (event) => {
    // ใส่โค้ดที่ต้องการให้ทำงานเมื่อมีการค้นหา
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box style={{ width: '100%', display: 'flex', alignItems: 'center', padding: '10px 0' ,backgroundColor:'white' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        role="navigation"
        TabIndicatorProps={{ style: { backgroundColor: '#1976d2' } }}
      >
        <img src={Logo} alt="Logo" style={{ width: '120px', height: 'auto', marginLeft: '20px' }} />
        <LinkTab label="หน้าหลัก" to="/home" onClick={(event) => handleChange(event, 1)} />
        <LinkTab label="ขออนุมัติ" to="/request_main" onClick={(event) => handleChange(event, 2)} />
        <LinkTab label="ประวัติ" to="/history" onClick={(event) => handleChange(event, 3)} />
        <LinkTab label="การแจ้งเตือน" to="/notification" onClick={(event) => handleChange(event, 4)} />
      </Tabs>

      {/* Search */}
      <div style={{ marginLeft: 'auto', marginRight: 100, display: 'flex', alignItems: 'center' }}>
        <SearchIcon style={{ color: '#555', marginRight: '10px' }} />
        <input
          type="text"
          placeholder="ค้นหา..."
          onChange={handleSearch}
          style={{ borderRadius: '25px', width: '300px', height: '30px', paddingLeft: '10px', border: '1px solid #ccc', marginRight: '20px' }}
        />
      </div>

      {/* Profile */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenuClick}
          color="inherit"
        >
          <Avatar alt="Profile" src="/assets/profile.png" style={{ cursor: 'pointer', marginRight: '10px' }} />
        </IconButton>
        <Typography variant="body1" style={{ color: '#555', marginRight: '30px'}}>พี่เอง คนเดิม</Typography>
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
          style={{ marginTop: '60px', marginLeft: '10px' }}
        >
          <MenuItem component={Link} to="/profile" onClick={handleClose}>โปรไฟล์</MenuItem>
          <MenuItem component={Link} to="/setting" onClick={handleClose}>การตั้งค่า</MenuItem>
          <MenuItem component={Link} to="/login" onClick={handleClose}>ออกจากระบบ</MenuItem>
        </Menu>
      </div>
    </Box>
  );
}
