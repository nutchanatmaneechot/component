import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';

export default function history() {
  // Mock data for transaction history
  const transactionHistory = [
    { id: 1, transactionCode: 'T001', date: '2024-05-01', amount: 100, type: 'Deposit', status: 'จ่ายแล้ว' },
    { id: 2, transactionCode: 'T002', date: '2024-05-02', amount: 200, type: 'Withdrawal', status: 'Pending' },
    { id: 3, transactionCode: 'T003', date: '2024-05-03', amount: 300, type: 'Transfer', status: 'จ่ายแล้ว' },
    { id: 4, transactionCode: 'T004', date: '2024-05-04', amount: 400, type: 'Payment', status: 'Pending' },
    { id: 5, transactionCode: 'T005', date: '2024-05-05', amount: 500, type: 'Deposit', status: 'จ่ายแล้ว' },
  ];

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
      <Paper elevation={3} sx={{ padding: 4, width: '100%', maxWidth: 800, borderRadius: 10, marginBottom: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', marginBottom: 4 }}>
          ประวัติการทำรายการทั้งหมด
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>รหัสการทำรายการ</TableCell>
                <TableCell>วันที่ทำรายการ</TableCell>
                <TableCell>จำนวนเงิน</TableCell>
                <TableCell>ประเภท</TableCell>
                <TableCell>สถานะ</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactionHistory.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{transaction.transactionCode}</TableCell>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.amount}</TableCell>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell>
                    <Chip
                      label={transaction.status}
                      color={transaction.status === 'จ่ายแล้ว' ? 'success' : 'warning'}
                      sx={{ fontWeight: 'bold' }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
