import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Logo from '../assets/logo-w.png';
import { Grid } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import './template.css';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#10A3D7',
        color: '#fff',
        padding: '20px', // เพิ่ม padding เพื่อให้มีพื้นที่รอบขอบ
        marginTop: 'auto', // ใช้ marginTop: 'auto' เพื่อให้ Footer อยู่ที่ด้านล่างของหน้าจอ
        width: '100%',
        zIndex: 1000
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={9}>
          <Box>
            <img src={Logo} alt="Footer Logo" style={{ width: '150px', height: 'auto' }} />
            <Typography variant="body2" sx={{ fontSize: '12px', marginTop: '10px', textAlign: 'left' }}>
              อาคารอำนวยการอุทยานวิทยาศาสตร์ภาคใต้ จังหวัดสงขลา<br />
              มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตหาดใหญ่ (ส่วนขยาย)<br />
              หมู่ที่ 6 ตำบลทุ่งใหญ่ อำเภอหาดใหญ่ จังหวัดสงขลา 90110
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={10} md={3}>
          <Typography variant="body2">
            ติดต่อสอบถาม
          </Typography>
          <Box display="flex" alignItems="flex-start" justifyContent="flex-start" flexDirection="column">
            <Box display="flex" alignItems="center" sx={{ marginBottom: '5px' }}>
              <PhoneIcon sx={{ marginRight: '5px', color: '#fff' }} />
              <Typography variant="body2">(+66) 0-7485-9500, 0-7485-9502</Typography>
            </Box>
            <Box display="flex" alignItems="center" sx={{ marginBottom: '5px' }}>
              <EmailIcon sx={{ marginRight: '5px', color: '#fff' }} />
              <Typography variant="body2">psusciencepark@gmail.com</Typography>
            </Box>
            <Box display="flex" alignItems="center" sx={{ marginBottom: '5px' }}>
              <LanguageIcon sx={{ marginRight: '5px', color: '#fff' }} />
              <Typography variant="body2">
                <Link href="http://www.psusp.net" target="_blank" rel="noopener noreferrer" sx={{ color: '#fff' }}>
                  www.psusp.net
                </Link>
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" sx={{ marginRight: '10px' }}>
                <InstagramIcon sx={{ color: '#fff' }} />
              </Link>
              <Link href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" sx={{ marginRight: '10px' }}>
                <YouTubeIcon sx={{ color: '#fff' }} />
              </Link>
              <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FacebookIcon sx={{ color: '#fff' }} />
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;

