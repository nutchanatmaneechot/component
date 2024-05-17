import '../component/login.css'
import '../component/template.css'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
function Login() {
  return (
    <div className='wrapper'>
    <form action=''>
      <h1 className='headlogin'>เข้าสู่ระบบ</h1>
      <Grid container spacing={10} justifyContent="center">
        <Grid item sm={11}>
          <Grid container spacing={1}>
            <Grid item xs={12} container justifyContent="flex-end"></Grid>
      <Grid item xs={12}>
        <TextField fullWidth label="ชื่อผู้ใช้งาน" variant="outlined" InputProps={{ style: { borderRadius: 12 } }} />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth type="password" label="รหัสผ่าน" variant="outlined" InputProps={{ style: { borderRadius: 12 } }} />
      </Grid>
      </Grid>
            </Grid>
          </Grid>
      
       
      <div className='remember-forget'>
        <label>
          <input type='checkbox' />
          Remember me
        </label>
        <a href="/forgetpassword">ลืมรหัสผ่าน</a>
      </div>
      <button type='submit'>เข้าสู่ระบบ</button>
      <p style={{ textAlign: 'center' }}>กรุณากรอกบัญชี PSU Passport และรหัสผ่าน</p>
      <div className='register-link'>
        <p>
          <a href="/register">สร้างบัญชีใหม่</a>
        </p>
      </div>
    </form>
  </div>
  
  );
}

export default Login; 