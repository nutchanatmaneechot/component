import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import CurrencyExchangeRoundedIcon from '@mui/icons-material/CurrencyExchangeRounded';const DocumentCard = () => {
  return (
    <Card sx={{ width: 200, height: 200, borderRadius: 2, backgroundColor: '#f0f0f0' }}>
      <CardActionArea
        component={Link}
        to="/request_money"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <CurrencyExchangeRoundedIcon style={{ fontSize: 64, marginBottom: 16 }} />
        <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'center', color: '#333' }}>
        ขอเบิกเงินรายได้
        </Typography>
      </CardActionArea>
    </Card>
  );
};

export default DocumentCard;
