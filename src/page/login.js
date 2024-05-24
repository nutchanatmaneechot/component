import React from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import place from '../assets/place.jpg'; 
function Login() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
   
    navigate('/home');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: `url(${place})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box
        component="form"
        onSubmit={handleLogin}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)', 
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
          เข้าสู่ระบบ
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
              type="password"
              label="รหัสผ่าน"
              variant="outlined"
              InputProps={{ style: { borderRadius: 12 } }}
            />
          </Grid>
        </Grid>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 2,
            marginTop: 2,
          }}
        >
          <Box>
            <Checkbox />
            <Typography component="span">Remember me</Typography>
          </Box>
          <Link href="/forgetpassword">ลืมรหัสผ่าน</Link>
        </Box>
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
          }}
        >
          เข้าสู่ระบบ
        </Button>
        <Typography
          sx={{
            fontSize: 14,
            textAlign: 'center',
            marginTop: 2,
          }}
        >
          กรุณากรอกบัญชี PSU Passport และรหัสผ่าน
        </Typography>
        <Box sx={{ textAlign: 'center', marginTop: 2 }}>
          <Link href="/register" sx={{ color: '#3300ff', fontWeight: 'bold' }}>
            สร้างบัญชีใหม่
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Login; 