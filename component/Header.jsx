import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert'; // เพิ่ม icon สำหรับ dropdown menu
import Logo from '../assets/logo-stsp.png';
import { Link } from 'react-router-dom';
import './template.css';


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
        // Routing libraries handle this, you can remove the onClick handle when using them.
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
  const [anchorEl, setAnchorEl] = useState(null); // state สำหรับเก็บ element ที่คลิกเพื่อเปิด dropdown menu

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSearch = (event) => {
    // ใส่โค้ดที่ต้องการให้ทำงานเมื่อมีการค้นหา
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', position: 'fixed', top: 0, zIndex: 1000, backgroundColor: '#fff', borderBottom: '1px solid #ccc' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        role="navigation"
        sx={{ flexGrow: 1 }} 
      >
        <img src={Logo} alt="Logo" style={{ width: '120px', height: 'auto', marginLeft: '20px' }} />
        <LinkTab label="หน้าหลัก" to="/home" onClick={(event) => handleChange(event, 1)} />
        <LinkTab label="ขออนุมัติ" to="/request" onClick={(event) => handleChange(event, 2)} />
        <LinkTab label="ลูกค้า" to="/customer" onClick={(event) => handleChange(event, 3)} />
        <LinkTab label="ประวัติ" to="/history" onClick={(event) => handleChange(event, 4)} />
      </Tabs>

      {/* Search */}
      <div style={{ marginLeft: 'auto', marginRight: 20, display: 'flex', alignItems: 'center' }}>
        <SearchIcon style={{ color: '#555', marginRight: '10px' }} />
        <input
          type="text"
          placeholder="ค้นหา..."
          onChange={handleSearch}
          style={{ borderRadius: '25px', width: '400px', height: '30px', paddingLeft: '10px', border: '1px solid #ccc', marginRight: '20px' }}
        />
      </div>

      {/* Profile */}
      <div style={{ marginLeft: '10px', display: 'flex', alignItems: 'center' }}>
        <IconButton onClick={handleMenuOpen}>
          <Avatar alt="Profile" src="/assets/profile.png" style={{ cursor: 'pointer', marginRight: '10px' }} />
        </IconButton>
        <Typography variant="body1" style={{ color: '#555', marginRight: '10px' }}>พี่เอง คนเดิม</Typography>
        <IconButton onClick={handleMenuOpen}>
          <MoreVertIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>โปรไฟล์</MenuItem>
          <MenuItem onClick={handleMenuClose}>ตั้งค่า</MenuItem>
          <MenuItem component={Link} to="/login" onClick={handleMenuClose}>ออกจากระบบ</MenuItem>
        </Menu>
      </div>
    </Box>
  );
}
