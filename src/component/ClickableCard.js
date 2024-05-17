import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function ClickableCard({ title, content, onClick }) {
  return (
    <Card sx={{ maxWidth: 345 }} onClick={onClick} style={{ cursor: 'pointer' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ClickableCard;
