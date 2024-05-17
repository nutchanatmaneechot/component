import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';

import Typography from '@mui/material/Typography';
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';
const DocumentCard = () => {
  return (
    <Card sx={{ width: 200, height: 200, borderRadius: 2, backgroundColor: '#f0f0f0' }}>
      <CardActionArea
        component={Link}
        to="/history"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <ReceiptLongRoundedIcon style={{ fontSize: 64, marginBottom: 16 }} />
        <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'center', color: '#333' }}>
          สัญญายืม
        </Typography>
      </CardActionArea>
    </Card>
  );
};

export default DocumentCard;
