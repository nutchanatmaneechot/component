import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

export default function Settings() {
  const [settings, setSettings] = useState({
    notifications: false,
    externalNotifications: false,
    limitProfileCreation: false,
  });

  const [openDialog, setOpenDialog] = useState(false); // State for controlling the dialog

  const handleSwitchChange = (event) => {
    const { name, checked } = event.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: checked,
    }));
  };

  const handleDeleteAccount = () => {
    // Logic to handle account deletion
    setOpenDialog(true); // Open the confirmation dialog
  };

  const handleDialogClose = () => {
    setOpenDialog(false); // Close the dialog
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f0f0",
        paddingTop: 4,
        paddingBottom: 4,
      }}
    >
      <Paper elevation={3} sx={{ padding: 4, width: "100%", maxWidth: 800, borderRadius: 10, marginBottom: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: "center", marginBottom: 4 }}>
          การตั้งค่า
        </Typography>
        <Box
          sx={{
            borderRadius: 2,
            border: "2px solid rgba(49, 52, 62, 0.5)",
            marginBottom: 4,
          }}
        >
          <Box
            sx={{
              backgroundColor: "#10A3D7",
              color: "#ffffff",
              borderRadius: "2px 2px 0 0",
              padding: 2,
            }}
          >
            <Typography variant="h6">การแจ้งเตือน</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 2,
              color: "#000000",
              backgroundColor: "#ffffff",
            }}
          >
            <Typography variant="body1">เปิดการแจ้งเตือน</Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={settings.notifications}
                  onChange={handleSwitchChange}
                  name="notifications"
                  color="primary"
                />
              }
            />
          </Box>
          <Divider sx={{ backgroundColor: "#000000" }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 2,
              color: "#000000",
              backgroundColor: "#ffffff",
              borderRadius: "0 0 2px 2px",
            }}
          >
            <Typography variant="body1">เปิดการแจ้งเตือนนอกแอพ</Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={settings.externalNotifications}
                  onChange={handleSwitchChange}
                  name="externalNotifications"
                  color="primary"
                />
              }
            />
          </Box>
        </Box>
        <Box
          sx={{
            borderRadius: 2,
            border: "2px solid rgba(49, 52, 62, 0.5)",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#10A3D7",
              color: "#ffffff",
              borderRadius: "2px 2px 0 0",
              padding: 2,
            }}
          >
            <Typography variant="h6">การตั้งค่า</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              padding: 2,
              color: "#000000",
              backgroundColor: "#ffffff",
            }}
          >
            <Typography variant="body1">จำกัดการสร้างโปรไฟล์</Typography>
            <Typography variant="body2" sx={{ color: "gray" }}>
              การสร้างโปรไฟล์ใหม่จะต้องใช้รหัสผ่าน
            </Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={settings.limitProfileCreation}
                  onChange={handleSwitchChange}
                  name="limitProfileCreation"
                  color="primary"
                />
              }
              
            />
           
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="body2"
                sx={{ color: "red", borderBottom: "1px solid red", cursor: "pointer", marginRight: 1 }}
                onClick={handleDeleteAccount}
              >
                ลบบัญชี
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>

      <Dialog
        open={openDialog}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"ยืนยันการลบบัญชี"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            คุณแน่ใจหรือไม่ที่ต้องการลบบัญชี?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            ยกเลิก
          </Button>
          <Button onClick={handleDialogClose} color="error" autoFocus>
            ลบ
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}