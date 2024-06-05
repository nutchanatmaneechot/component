import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

export default function LoanRequest() {
  const [loanDetails, setLoanDetails] = useState({
    contractNumber: '',
    documentNumber: '',
    amount: '',
    installments: Array(3).fill({ amount: '', receiveDate: '', transferDate: '' }),
    note: '',
    paymentEntity: '',
    payee: '',
    accountNumber: '',
    repaymentDate: '',
  });

  const handleChange = (event, index = null) => {
    const { name, value } = event.target;
    if (index !== null) {
      const newInstallments = [...loanDetails.installments];
      newInstallments[index][name] = value;
      setLoanDetails({
        ...loanDetails,
        installments: newInstallments,
      });
    } else {
      setLoanDetails({
        ...loanDetails,
        [name]: value,
      });
    }
  };

  const navigate = useNavigate();

  const handleRadioChange = (event) => {
    setLoanDetails({
      ...loanDetails,
      paymentEntity: event.target.value,
    });
  };

  const handleSubmit = () => {
    console.log('Loan Details:', loanDetails);
  };

  const handleBack = () => {
    navigate(-1); // This will navigate to the previous page
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
        padding: 4,
      }}
    >
      <Paper elevation={3} sx={{ padding: 4, width: '100%', maxWidth: 800, borderRadius: 10, position: 'relative' }}>
        <IconButton onClick={handleBack} sx={{ position: 'absolute', top: 25, left: 20 }}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', marginBottom: 4 }}>
          ยืมเงินสำหรับการเดินทางไปปฏิบัติงาน
        </Typography>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <TextField
                label="เลขที่สัญญายืมเงิน"
                variant="outlined"
                name="contractNumber"
                value={loanDetails.contractNumber}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                label="เลขที่เอกสารยืมเงิน"
                variant="outlined"
                name="documentNumber"
                value={loanDetails.documentNumber}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                label="จำนวนเงินที่ต้องการยืม(บาท*)"
                variant="outlined"
                name="amount"
                value={loanDetails.amount}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
          </Grid>

          {loanDetails.installments.map((installment, index) => (
            <Grid
              container
              spacing={2}
              key={index}
              justifyContent="center"
              alignItems="center"
              sx={{ marginBottom: 2 }}
            >
              <Grid item xs={12} md={3}>
                <TextField
                  label={`งวดที่ ${index + 1} จำนวนเงิน`}
                  variant="outlined"
                  name="amount"
                  value={installment.amount}
                  onChange={(e) => handleChange(e, index)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="วันที่ต้องการรับเงิน"
                  type="date"
                  name="receiveDate"
                  value={installment.receiveDate}
                  onChange={(e) => handleChange(e, index)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="วันที่โอนเงินยืม"
                  type="date"
                  name="transferDate"
                  value={installment.transferDate}
                  onChange={(e) => handleChange(e, index)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                />
              </Grid>
            </Grid>
          ))}

          <TextField
            label="หมายเหตุ"
            variant="outlined"
            name="note"
            value={loanDetails.note}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            sx={{ marginTop: 2 }}
          />

          <FormControl component="fieldset" sx={{ marginTop: 2 }}>
            <FormLabel component="legend">จ่ายเงินยืมโดย</FormLabel>
            <RadioGroup
              row
              name="paymentEntity"
              value={loanDetails.paymentEntity}
              onChange={handleRadioChange}
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

          <Grid container spacing={2} alignItems="center" sx={{ marginTop: 2 }}>
            <Grid item xs={12} md={6}>
              <TextField
                label="จ่ายเงินยืมให้แก่"
                variant="outlined"
                name="payee"
                value={loanDetails.payee}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="เลขที่บัญชี"
                variant="outlined"
                name="accountNumber"
                value={loanDetails.accountNumber}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} alignItems="center" sx={{ marginTop: 2 }}>
            <Grid item xs={12} md={6}>
              <TextField
                label="วันที่กำหนดชำระคืน"
                type="date"
                name="repaymentDate"
                value={loanDetails.repaymentDate}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
                ** ภายใน 15 วันนับจากวันสิ้นสุดการเดินทาง
              </Typography>
            </Grid>
          </Grid>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{ width: '100px', height: '50px', fontSize: '18px', padding: '10px 20px' }}
            >
              ยืนยัน
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
