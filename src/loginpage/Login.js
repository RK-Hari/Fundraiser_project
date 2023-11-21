import React from 'react'
import './Login.css'
import './script.js'
import { AppBar, Toolbar, Container, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Link } from 'react-router-dom';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
const Login = () => {
    const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <div className='top-container'>
    <header>
        <h2 class="logo">FUNDRAISER.Inc</h2>
        <nav class="navigation">
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Services</a>
           <a href='contact'>Contact</a>
            <button class="btn">Login</button>
        </nav>
    </header>
    <div className='wrapper'>
        <div className='form-login'>
            <h2>Login</h2>
            <form action="#">
                <div className='input-box'>
                    <span class="icon"></span>
                    <input type="text" required></input>
                    <label>Email</label> 
                </div>
                <div className='input-box'>
                    <span class="icon"></span>
                    <input type="password" required></input>
                    <label>Password</label> 
                </div>
                <div className='remember-forget'>
                    <label>
                    <input type='checkbox'/>Remember me</label>
                    <a href="#">Forgot Password?</a>
                </div>
                <Link to="/"><button type="submit" class="btn-login" onClick={handleClick}>Login</button></Link>
                <div className='login-register'>
                    <p>Don't have an account ?<a href="#" className='register-link'>Register</a></p>
                </div>
            </form>
        </div>

        <div className='form-register'>
            <h2>Registration</h2>
            <form action="#">
                <div className='input-box'>
                    <span class="icon"></span>
                    <input type="text" required></input>
                    <label>Username</label> 
                </div>
                <div className='input-box'>
                    <span class="icon"></span>
                    <input type="text" required></input>
                    <label>Email</label> 
                </div>
                <div className='input-box'>
                    <span class="icon"></span>
                    <input type="password" required></input>
                    <label>Password</label> 
                </div>
                <div className='remember-forget'>
                    <label>
                    <input type='checkbox'/>I agree to terms & conditions
                    </label>
                </div>
                <button type="submit" class="btn-login" onClick={handleClick}>Register</button>
                <div className='login-register'>
                    <p>Already have an account ?<a href="#" className='login-link'>Login</a></p>
                </div>
            </form>
        </div>
    </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Successful !
        </Alert>
      </Snackbar>
      <AppBar
      style={{
        marginTop: '720px',
        backgroundColor: '#162938',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)',
      }}
    >
      <Container>
        <Toolbar>
          <IconButton color="inherit" href="/">
            <HomeIcon />
          </IconButton>
          <IconButton color="inherit" href="/about">
            <InfoIcon />
          </IconButton>
          <IconButton color="inherit" href="/contact">
            <MailIcon />
          </IconButton>
          <div style={{ flexGrow: 1 }}></div>
          <IconButton color="inherit" href="https://www.facebook.com/">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" href="https://www.linkedin.com/">
            <LinkedInIcon />
          </IconButton>
          <IconButton color="inherit" href="https://twitter.com/">
            <TwitterIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
    </div>
  )
}

export default Login
