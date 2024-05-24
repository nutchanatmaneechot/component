import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import place from '../assets/place.jpg'; 

function Register() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: `url(${place})`, 
        backgroundPosition: 'center',
        backgroundSize: 'cover', // Make sure the image covers the entire background
      }}
    >
      <Box
        component="form"
        sx={{
          backgroundColor: 'white',
          padding: 2,
          boxShadow: '0 5px 4px rgba(0, 0, 0, 0.1)',
          width: 450,
          maxWidth: '100%',
          borderRadius: 5, 
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            textAlign: 'center',
            marginBottom: 2,
            color: '#0038FF',
            fontWeight: 'bold',
          }}
        >
          ลงทะเบียน
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="ชื่อผู้ใช้งาน"
              variant="outlined"
              InputProps={{ style: { borderRadius: 12 } }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="อีเมล"
              variant="outlined"
              InputProps={{ style: { borderRadius: 12 } }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="password"
              label="รหัสผ่าน"
              variant="outlined"
              InputProps={{ style: { borderRadius: 12 } }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="password"
              label="ยืนยันรหัสผ่าน"
              variant="outlined"
              InputProps={{ style: { borderRadius: 12 } }}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            padding: '12px',
            borderRadius: '40px',
            backgroundColor: '#0038FF',
            '&:hover': {
              backgroundColor: 'rgba(0, 56, 255, 0.8)',
            },
            fontWeight: 'bold',
            color: '#fff',
            marginTop: 2,
          }}
        >
          ลงทะเบียน
        </Button>
        <Typography
          sx={{
            fontSize: 12,
            textAlign: 'center',
            marginTop: 2,
          }}
        >
          By continuing, you agree to the Terms of use and Privacy Policy.
        </Typography>
        <Box sx={{ textAlign: 'center', marginTop: 2 }}>
          <Link href="/login" sx={{ color: '#3300ff', fontWeight: 'bold' }}>
            เข้าสู่ระบบ
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Register;
