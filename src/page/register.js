import '../component/template.css'
import '../component/login.css'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
function Register() {
    return (
      <div> 
       
        <div className='wrapper'>
          <form action=''>
            <h1 className='headlogin'>ลงทะเบียน</h1>
            <Grid container spacing={10} justifyContent="center">
        <Grid item sm={11}>
          <Grid container spacing={1}>
            <Grid item xs={12} container justifyContent="flex-end"></Grid>
      <Grid item xs={12}>
        <TextField fullWidth label="ชื่อผู้ใช้งาน" variant="outlined" InputProps={{ style: { borderRadius: 12 } }} />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth label="อีเมล" variant="outlined" InputProps={{ style: { borderRadius: 12 } }} />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth type="password" label="รหัสผ่าน" variant="outlined" InputProps={{ style: { borderRadius: 12 } }} />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth type="password" label="ยืนยันรหัสผ่าน" variant="outlined" InputProps={{ style: { borderRadius: 12 } }} />
      </Grid>
      </Grid>
            </Grid>
          </Grid>
            <button type='submit'>ลงทะเบียน</button>
            <p style={{ textAlign: 'center', fontSize: '12px' }}>By continuing, you agree to the Terms of use and Privacy Policy.</p>
  
            <div className='login-link'>
              <p>  
              <a href="/login">เข้าสู่ระบบ</a>
              </p>
            </div>
          </form>
        
        </div>
      </div>
    )
  }
  
  export default Register