import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import { useNavigate } from 'react-router-dom';

export default function AdvancePaymentDisbursement() {
  const [formData, setFormData] = useState({
    mu: '',
    documentType: '',
    documentDate: '',
    requestInstallment: false,
    documentAggregation: '',
    budgetYear: new Date().getFullYear().toString(),
    fundingSource: '',
    campus: '',
    department: '',
    unit: '', 
    paymentEntity: '', 
    personnelcode :'',
    approvedamount :'',
    amountspent :'',
    remainingamount :'',
    description :'',
    payment :'',
  });

  const [fundingSourceMessage, setFundingSourceMessage] = useState('');
  const [campusMessage, setCampusMessage] = useState('');
  const [departmentMessage, setDepartmentMessage] = useState('');
  const [unitMessage, setUnitMessage] = useState(''); 

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleRadioChange = () => {
    setFormData({
      ...formData,
      requestInstallment: !formData.requestInstallment,
    });
  };

  const handleSubmit = () => {
    console.log('Advance Payment Disbursement Data:', formData);
  };

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    switch (formData.fundingSource) {
      case 'Option 1':
        setFundingSourceMessage('ข้อความ1');
        break;
      case 'Option 2':
        setFundingSourceMessage('ข้อความ0');
        break;
      case 'Option 3':
        setFundingSourceMessage('ข้อความ3');
        break;
      default:
        setFundingSourceMessage('');
    }
  }, [formData.fundingSource]);

  useEffect(() => {
    switch (formData.campus) {
      case 'Campus 1':
        setCampusMessage('Campus1');
        break;
      case 'Campus 2':
        setCampusMessage('Campus2');
        break;
      case 'Campus 3':
        setCampusMessage('Campus3');
        break;
      default:
        setCampusMessage('');
    }
  }, [formData.campus]);

  useEffect(() => {
    switch (formData.department) {
      case 'Department 1':
        setDepartmentMessage('Department1');
        break;
      case 'Department 2':
        setDepartmentMessage('Department2');
        break;
      case 'Department 3':
        setDepartmentMessage('Department3');
        break;
      default:
        setDepartmentMessage('');
    }
  }, [formData.department]);

  useEffect(() => {
    switch (formData.unit) {
      case 'Unit 1':
        setUnitMessage('ข้อมูลที่เกี่ยวข้องกับ Unit 1');
        break;
      case 'Unit 2':
        setUnitMessage('ข้อมูลที่เกี่ยวข้องกับ Unit 2');
        break;
      case 'Unit 3':
        setUnitMessage('ข้อมูลที่เกี่ยวข้องกับ Unit 3');
        break;
      default:
        setUnitMessage('');
    }
  }, [formData.unit]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f0f0',
        padding: 7,
      }}
    >
      <Paper elevation={3} sx={{ padding: 4, width: '60%', height: '50%', borderRadius: 10, position: 'relative' }}>
        <IconButton onClick={handleBack} sx={{ position: 'absolute', top: 25, left: 20 }}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', marginBottom: 4 }}>
          เบิกจ่ายเงินบุคคลรายได้
        </Typography>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
            <TextField
              label="ที่ มอ"
              variant="outlined"
              name="mu"
              value={formData.mu}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="ประเภทเอกสาร"
              variant="outlined"
              name="documentType"
              value={formData.documentType}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="วันที่เอกสาร"
              type="date"
              name="documentDate"
              value={formData.documentDate}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
            <FormControlLabel
              control={
                <Radio
                  checked={formData.requestInstallment}
                  onChange={handleRadioChange}
                  color="primary"
                />
              }
              label="ขอเปิดงวด"
            />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3, alignItems: 'center' }}>
            <TextField
              label="เอกสารรวบ"
              variant="outlined"
              name="documentAggregation"
              value={formData.documentAggregation}
              onChange ={handleChange}
              fullWidth
            />
            <FormControl fullWidth>
              <InputLabel id="funding-source-label">แหล่งเงิน</InputLabel>
              <Select
                labelId="funding-source-label"
                label="แหล่งเงิน"
                name="fundingSource"
                value={formData.fundingSource}
                onChange={handleChange}
              >
                <MenuItem value="">โปรดเลือก</MenuItem>
                <MenuItem value="Option 1">Option 1</MenuItem>
                <MenuItem value="Option 2">Option 2</MenuItem>
                <MenuItem value="Option 3">Option 3</MenuItem>
              </Select>
            </FormControl>
            <Typography variant="body1" sx={{ ml: 2 }}>
              {fundingSourceMessage}
            </Typography>
          
            <TextField
              label="ปีงบประมาณ"
              type="number"
              name="budgetYear"
              value={formData.budgetYear}
              onChange={handleChange}
              fullWidth
            />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3, alignItems: 'center' }}>
            <FormControl fullWidth>
              <InputLabel id="campus-label">วิทยาเขต</InputLabel>
              <Select
                labelId="campus-label"
                label="วิทยาเขต"
                name="campus"
                value={formData.campus}
                onChange={handleChange}
              >
                <MenuItem value="">โปรดเลือก</MenuItem>
                <MenuItem value="Campus 1">Campus 1</MenuItem>
                <MenuItem value="Campus 2">Campus 2</MenuItem>
                <MenuItem value="Campus 3">Campus 3</MenuItem>
              </Select>
            </FormControl>
            <Typography variant="body1" sx={{ ml: 2 }}>
              {campusMessage}
            </Typography>
          
          
            <FormControl fullWidth>
              <InputLabel id="department-label">ส่วนงาน</InputLabel>
              <Select
                labelId="department-label"
                label="ส่วนงาน"
                name="department"
                value={formData.department}
                onChange={handleChange}
              >
                <MenuItem value="">โปรดเลือก</MenuItem>
                <MenuItem value="Department 1">Department 1</MenuItem>
                <MenuItem value="Department 2">Department 2</MenuItem>
                <MenuItem value="Department 3">Department 3</MenuItem>
              </Select>
            </FormControl>
            <Typography variant="body1" sx={{ ml: 2 }}>
              {departmentMessage}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3, alignItems: 'center' }}>
            <FormControl fullWidth>
              <InputLabel id="unit-label">หน่วยงาน</InputLabel>
              <Select
                labelId="unit-label"
                label="หน่วยงาน"
                name="unit"
                value={formData.unit}
                onChange={handleChange}
              >
                <MenuItem value="">โปรดเลือก</MenuItem>
                <MenuItem value="Unit 1">Unit 1</MenuItem>
                <MenuItem value="Unit 2">Unit 2</MenuItem>
                <MenuItem value="Unit 3">Unit 3</MenuItem>
              </Select>
            </FormControl>
            <Typography variant="body1" sx={{ ml: 2 }}>
              {unitMessage}
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3, alignItems: 'center', justifyContent: 'center' }}>
  <FormLabel component="legend" sx={{ marginRight: 2 }}>จ่ายเงินยืมโดย</FormLabel>
  <FormControl component="fieldset" sx={{ marginTop: 0 }}>
    <RadioGroup
      row
      name="paymentEntity"
      value={formData.paymentEntity}
      onChange={handleChange}
    >
      <FormControlLabel
        value="university"
        control={<Radio color="primary" />}
        label="มหาวิทยาลัย"
      />
      <FormControlLabel
        value="campus"
        control={<Radio color="primary" />}
        label="วิทยาเขต"
      />
      <FormControlLabel
        value="department"
        control={<Radio color="primary" />}
        label="ส่วนงาน"
      />
      <FormControlLabel
        value="subDepartment"
        control={<Radio color="primary" />}
        label="ส่วนงานย่อย"
      />
    </RadioGroup>
  </FormControl>
</Box>

        
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', marginBottom: 4 }}>
              ข้อมูลงบประมาณ
              </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
              <TextField
              label="รหัส"
              variant="outlined"
              name="personnelcode"
              value={formData.personnelcode}
              onChange={handleChange}
              fullWidth
              
            />
            <TextField
              label="จำนวนเงินอนุมัติ(บาท)"
              variant="outlined"
              name="approvedamount"
              value={formData.approvedamount}
              onChange={handleChange}
              fullWidth
              
            />
            <TextField
              label="จำนวนเงินใช้แล้ว(บาท)"
              variant="outlined"
              name="amountspent"
              value={formData.amountspent}
              onChange={handleChange}
              fullWidth
              
            />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
              <TextField
              label="จำนวนเงินคงเหลือ(บาท)"
              variant="outlined"
              name="remainingamount"
              value={formData.remainingamount }
              onChange={handleChange}
              fullWidth
              
            />
            <TextField
              label="คำอธิบาย"
              variant="outlined"
              name="description"
              value={formData.description}
              onChange={handleChange}
              fullWidth
              
            />
             
           
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
            <TextField
              label="เรื่อง"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
            />
              <TextField
              label="เรียน"
              variant="outlined"
              name="to"
              value={formData.to}
              onChange={handleChange}
              fullWidth
            />
            

          </Box>
          <Box>
              <TextField
              label="ข้อความ"
              variant="outlined"
              name="mess"
              value={formData.mess}
              onChange={handleChange}
              fullWidth
              
            />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
              <TextField
              label="ผู้เสนอ"
              variant="outlined"
              name="present"
              value={formData.present}
              onChange={handleChange}
              fullWidth
              
            />
            <TextField
              label="จำนวนเงิน(บาท)"
              variant="outlined"
              name="money"
              value={formData.money}
              onChange={handleChange}
              fullWidth
              
            />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
              <TextField
              label="ตำแหน่งผู้เสนอ"
              variant="outlined"
              name="position"
              value={formData.position}
              onChange={handleChange}
              fullWidth
              
            />
            <TextField
              label="โทร"
              variant="outlined"
              name="tel"
              value={formData.tel}
              onChange={handleChange}
              fullWidth
              
            />
            </Box>
            
            

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{ width: '100px', height: '50px', fontSize: '18px', padding:'10px 20px' }}
            >
              ยืนยัน
            </Button>
          </Box>
         
        </Box>
      </Paper>
    </Box>
  );
}
