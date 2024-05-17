import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export default function Notifications() {
  const notifications = [
    { id: 1, title: 'การแจ้งเตือน 1', description: 'รายละเอียดของการแจ้งเตือน 1' },
    { id: 2, title: 'การแจ้งเตือน 2', description: 'รายละเอียดของการแจ้งเตือน 2' },
    { id: 3, title: 'การแจ้งเตือน 3', description: 'รายละเอียดของการแจ้งเตือน 3' },
    { id: 4, title: 'การแจ้งเตือน 4', description: 'รายละเอียดของการแจ้งเตือน 4' },
    { id: 5, title: 'การแจ้งเตือน 5', description: 'รายละเอียดของการแจ้งเตือน 5' },
    { id: 6, title: 'การแจ้งเตือน 6', description: 'รายละเอียดของการแจ้งเตือน 6' },
  ];

  const handleDeleteNotification = (id) => {
    console.log(`Deleted notification with id: ${id}`);
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
      <Paper elevation={3} sx={{ padding: 4, width: '100%', maxWidth: 800, borderRadius: 10, marginBottom: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
          <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
            การแจ้งเตือน
          </Typography>
        </Box>
        <List sx={{ width: '100%' }}>
          {notifications.map((notification) => (
            <ListItem key={notification.id} sx={{ marginBottom: 2, borderRadius: 2, backgroundColor: '#ffffff' }}>
              <ListItemAvatar>
                <Avatar>{notification.title.charAt(0)}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={notification.title}
                secondary={notification.description}
                sx={{ borderRadius: 2, padding: 2 }}
              />
              <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteNotification(notification.id)}>
                <CloseRoundedIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}
