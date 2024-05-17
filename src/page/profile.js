import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

export default function Profile() {
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    position: '',
    department: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(profileData);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f0f0',
        paddingTop: 4, // เพิ่มระยะห่างด้านบน
        paddingBottom: 4, // เพิ่มระยะห่างด้านล่าง
      }}
    >
      <Paper elevation={3} sx={{ padding: 4, width: '100%', maxWidth: 800, borderRadius: 10, marginBottom: 4 }}> 
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="h4" gutterBottom>
            แก้ไขข้อมูลโปรไฟล์
          </Typography>
          <Avatar alt="Profile" src="/assets/profile.png" sx={{ width: 150, height: 150, marginBottom: 2 }} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%' }}>

            <TextField
              label="ชื่อ"
              name="firstName"
              value={profileData.firstName}
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              variant="outlined"
              sx={{ borderRadius: 2, '& fieldset': { borderRadius: 2 } }}
            />

            <TextField
              label="นามสกุล"
              name="lastName"
              value={profileData.lastName}
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              variant="outlined"
              sx={{ borderRadius: 2, '& fieldset': { borderRadius: 2 } }}
            />
          </Box>
          
          <TextField
            label="อีเมล"
            name="email"
            value={profileData.email}
            onChange={handleChange}
            margin="normal"
            required
            fullWidth
            type="email"
            variant="outlined"
            sx={{ borderRadius: 2, '& fieldset': { borderRadius: 2 } }}
          />
          <TextField
            label="ตำแหน่ง"
            name="position"
            value={profileData.position}
            onChange={handleChange}
            margin="normal"
            required
            fullWidth
            variant="outlined"
            sx={{ borderRadius: 2, '& fieldset': { borderRadius: 2 } }}
          />

          <Box sx={{ width: '100%', borderRadius: 10 }}>
          <FormControl fullWidth variant="outlined" required>
          <InputLabel>ฝ่าย</InputLabel>
              <Select
                label="เลือกฝ่าย"
                name="department"
                value={profileData.department}
                onChange={handleChange}
                sx={{ borderRadius: 2 }}
              >
              <MenuItem value="">
                  <em>ฝ่าย</em>
                </MenuItem>
                <MenuItem value="ฝ่าย1">ผู้บริหาร</MenuItem>
                <MenuItem value="ฝ่าย2">สำนักงานกลาง</MenuItem>
                <MenuItem value="ฝ่าย3">ฝ่ายยุทธศาสตร์และแผน</MenuItem>
                <MenuItem value="ฝ่าย4">ฝ่ายประชาสัมพันธ์และสื่อสารองค์กร</MenuItem>
                <MenuItem value="ฝ่าย5">ศูนย์บ่มเพาะวิสาหกิจ</MenuItem>
                <MenuItem value="ฝ่าย6">ศูนย์ทรัพย์สินทางปัญญา</MenuItem>
                <MenuItem value="ฝ่าย7">ฝ่ายโครงสร้างพื้นฐานด้านวิทยาศาสตร์ เทคโนโลยีและนวัตกรรม</MenuItem>
                <MenuItem value="ฝ่าย8">สำนักงานความร่วมมืออุตสาหกรรม</MenuItem>
                <MenuItem value="ฝ่าย9">สถานพัฒนาการเป็นผู้ประกอบการนักศึกษา</MenuItem>
                <MenuItem value="ฝ่าย9">ศูนย์นวัตกรรมการออกแบบ</MenuItem>
            </Select>
            </FormControl>
          </Box>

          <TextField
            label="รหัสผ่าน"
            name="password"
            value={profileData.password}
            onChange={handleChange}
            margin="normal"
            required
            fullWidth
            type="password"
            variant="outlined"
            sx={{ borderRadius: 2, '& fieldset': { borderRadius: 2 } }}
          />
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button variant="contained" color="error" sx={{ mt: 3, mr: 2 }} onClick={() => setProfileData({})}>
                ยกเลิก
            </Button>
            <Button variant="contained" color="primary" type="submit" sx={{ mt: 3 }}>
                บันทึก
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
