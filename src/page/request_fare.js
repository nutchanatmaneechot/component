import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

export default function TravelExpenseRequest() {
  const [formData, setFormData] = useState({
    department: '',
    position: '',
    section: '',
    travelApproval: '',
    travelCompanions: '',
    subject: '',
    travelType: '',
    travelDate: '',
    travelDateBack: '',
    paymentBy: ''
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleBack = () => {
    navigate(-1);  // This will navigate to the previous page
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
        paddingTop: 4,
        paddingBottom: 4,
      }}
    >
      <Paper elevation={3} sx={{ padding: 4, width: '100%', maxWidth: 800, borderRadius: 10, position: 'relative' }}>
        <IconButton
          onClick={handleBack}
          sx={{ position: 'absolute', top: 25, left: 20 }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
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
            ขออนุมัติเบิกค่าเดินทาง
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%' }}>
            <FormControl fullWidth variant="outlined" required>
              <InputLabel>ฝ่าย</InputLabel>
              <Select
                label="ฝ่าย"
                name="department"
                value={formData.department}
                onChange={handleChange}
                sx={{ borderRadius: 2 }}
              >
                <MenuItem value="">
                  <em>เลือกฝ่าย</em>
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

            <FormControl fullWidth variant="outlined" required>
              <InputLabel>ส่วนงาน</InputLabel>
              <Select
                label="ส่วนงาน"
                name="section"
                value={formData.section}
                onChange={handleChange}
                sx={{ borderRadius: 2 }}
              >
                <MenuItem value="">
                  <em>เลือกส่วนงาน</em>
                </MenuItem>
                <MenuItem value="ส่วนงาน1">ส่วนงาน1</MenuItem>
                <MenuItem value="ส่วนงาน2">ส่วนงาน2</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <TextField
            label="ตำแหน่ง"
            name="position"
            value={formData.position}
            onChange={handleChange}
            margin="normal"
            required
            fullWidth
            variant="outlined"
            sx={{ borderRadius: 2, '& fieldset': { borderRadius: 2 } }}
          />

          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%' }}>
            <FormControl fullWidth variant="outlined" required>
              <InputLabel>ขออนุมัติเดินทาง</InputLabel>
              <Select
                label="ขออนุมัติเดินทาง"
                name="travelApproval"
                value={formData.travelApproval}
                onChange={handleChange}
                sx={{ borderRadius: 2 }}
              >
                <MenuItem value="">
                  <em>เลือกขออนุมัติเดินทาง</em>
                </MenuItem>
                <MenuItem value="approval1">approval1</MenuItem>
                <MenuItem value="approval2">approval2</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="ผู้ร่วมเดินทาง (โปรดกรอกชื่อ...)"
              name="travelCompanions"
              value={formData.travelCompanions}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              sx={{ borderRadius: 2, '& fieldset': { borderRadius: 2 } }}
            />
          </Box>

          <TextField
            label="หัวเรื่อง"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            margin="normal"
            required
            fullWidth
            variant="outlined"
            sx={{ borderRadius: 2, '& fieldset': { borderRadius: 2 } }}
          />

          <FormControl component="fieldset" sx={{ width: '100%', alignItems: 'flex-start' }}>
            <FormLabel component="legend">เป็นการเดินทาง</FormLabel>
            <RadioGroup
              name="travelType"
              value={formData.travelType}
              onChange={handleChange}
              row
            >
              <FormControlLabel value="ต่างประเทศ" control={<Radio />} label="ต่างประเทศ" />
              <FormControlLabel value="ภายในประเทศ" control={<Radio />} label="ภายในประเทศ" />
            </RadioGroup>
          </FormControl>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%' }}>
          <TextField
            label="วันที่"
            type="date"
            name="travelDate"
            value={formData.travelDate}
            onChange={handleDateChange}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            required
            variant="outlined"
            sx={{ borderRadius: 2, '& fieldset': { borderRadius: 2 } }}
          />
          
          <TextField
            label="ถึง"
            type="date"
            name="travelDateBack"
            value={formData.travelDateBack}
            onChange={handleDateChange}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            required
            variant="outlined"
            sx={{ borderRadius: 2, '& fieldset': { borderRadius: 2 } }}
          />
          </Box>

          <FormControl component="fieldset" sx={{ width: '100%', alignItems: 'flex-start' }}>
            <FormLabel component="legend">จ่ายโดย</FormLabel>
            <RadioGroup
              name="paymentBy"
              value={formData.paymentBy}
              onChange={handleChange}
              row
            >
              <FormControlLabel value="มหาวิทยาลัย" control={<Radio />} label="มหาวิทยาลัย" />
              <FormControlLabel value="วิทยาเขต" control={<Radio />} label="วิทยาเขต" />
              <FormControlLabel value="ส่วนงาน" control={<Radio />} label="ส่วนงาน" />
              <FormControlLabel value="ส่วนงานย่อย" control={<Radio />} label="ส่วนงานย่อย" />
            </RadioGroup>
          </FormControl>

          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 3, width: '100px', height: '50px', fontSize: '18px', padding: '10px 20px' }}
          >
            ยืนยัน
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
