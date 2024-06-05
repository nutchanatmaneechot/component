import React from 'react';
import Grid from '@mui/material/Grid';
import ButtonRequest from '../component/ButtonRequest';
import ButtonIncome from '../component/ButtonIncome';
import ButtonStoreDebt from '../component/ButtonStoreDebt';
import ButtonDisburse from '../component/ButtonDisbursement';
import ButtonAgree from '../component/ButtonAgreement';
import ButtonGuarantee from '../component/ButtonGuarantee';
import ButtonRequestMoney from '../component/ButtonRequestMoney';
function request_main() {
  return (
    <div>
      <div style={{ padding: '70px' }}>
        <h1 style={{ textAlign: 'center' }}>ขอเบิกอุดหนุนและเงินรายได้</h1>
        <Grid container spacing={3} justifyContent="center">
          <Grid container item xs={12} spacing={3} justifyContent="center">
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <ButtonDisburse />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <ButtonStoreDebt />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <ButtonIncome />
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={3} justifyContent="center">
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <ButtonRequest />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <ButtonAgree />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <ButtonRequestMoney />
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={3} justifyContent="center">
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <ButtonGuarantee />
            </Grid>
          </Grid>
        </Grid>
      </div>
     
 
    </div>
  );
}
export default request_main