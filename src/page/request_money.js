import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

export default function RequestMoney() {
  const [formData, setFormData] = useState({
    employeeId: '',
    employeeName: '',
    accountNumber: '',
    bank: '',
    paymentStatus: '',
    paymentDate: null,
    tranferDate: ''
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
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

  const handleDateChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
      <Paper elevation={3} sx={{ padding: 4, width: '100%', maxWidth: 800, borderRadius: 10, marginBottom: 4, position: 'relative' }}>
        <IconButton 
          onClick={handleBack} 
          sx={{ position: 'absolute', top: 25, left: 20 }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
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
              <Typography variant="h4" gutterBottom >
                ขออนุมัติเบิกค่าใช้จ่าย
              </Typography>

              <TextField
                label="รหัสบุคลากร"
                name="employeeId"
                value={formData.employeeId}
                onChange={handleChange}
                margin="normal"
                required
                fullWidth
                variant="outlined"
                sx={{ borderRadius: 2, '& fieldset': { borderRadius: 2 } }}
              />

              <TextField
                label="ชื่อบุคลากร"
                name="employeeName"
                value={formData.employeeName}
                onChange={handleChange}
                margin="normal"
                required
                fullWidth
                variant="outlined"
                sx={{ borderRadius: 2, '& fieldset': { borderRadius: 2 } }}
              />

              <TextField
                label="เลขที่บัญชี"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                margin="normal"
                required
                fullWidth
                variant="outlined"
                sx={{ borderRadius: 2, '& fieldset': { borderRadius: 2 } }}
              />

              <TextField
                label="ธนาคาร"
                name="bank"
                value={formData.bank}
                onChange={handleChange}
                margin="normal"
                required
                fullWidth
                variant="outlined"
                sx={{ borderRadius: 2, '& fieldset': { borderRadius: 2 } }}
              />

              <Select
                label="สถานะการชำระเงิน"
                value={formData.paymentStatus}
                onChange={handleChange}
                name="paymentStatus"
                required
                fullWidth
                variant="outlined"
                sx={{ borderRadius: 2 }}
              >
                <MenuItem value="" disabled>
                  สถานะการชำระเงิน
                </MenuItem>
                <MenuItem value="paid">ชำระเงินแล้ว</MenuItem>
                <MenuItem value="unpaid">ยังไม่ชำระเงิน</MenuItem>
              </Select>

              <TextField
                label="วันที่จ่าย/โอนเงิน"
                type="date"
                name="tranferDate"
                value={formData.tranferDate}
                onChange={handleDateChange}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                required
                variant="outlined"
                sx={{ borderRadius: 2, '& fieldset': { borderRadius: 2 } }}
              />

              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{ mt: 3, width: '100px', height: '50px', fontSize: '18px', padding: '10px 20px'}}
                >
                  บันทึก
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '70%',
                border: '2px dashed #ccc',
                borderRadius: 2,
                padding: 2,
                marginTop: 10,
              }}
            >
              <Typography variant="h6" gutterBottom>
                อัปโหลดรูปภาพ
              </Typography>
              <Button
                variant="contained"
                component="label"
                sx={{ mt: 2}}
              >
                เลือกรูปภาพ
                <input
                  type="file"
                  hidden
                />
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
