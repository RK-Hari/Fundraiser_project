import React, { useContext } from 'react'
import './Login.css'
import './script.js'
import { AppBar, Toolbar, Container, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [registeruser,setRegisteruser]=useState("");
  const [registeremail,setRegisteremail]=useState("");
  const [registerpass,setRegisterpass]=useState("");

  

  const [loginemail,setLoginemail]=useState("");
  const [loginpass,setLoginpass]=useState("");

  const navigate=useNavigate();
  
  const ProceedLogin=(ee)=>{
    ee.preventDefault();
    if(validate()){
      axios
      .get(`http://localhost:8000/users?registeremail=${loginemail}`)
      .then((response)=>{
        const resp=response.data;
        console.log(resp);
        const user=resp.find((user)=> user.registeremail===loginemail);
        console.log(user);
        if(!user){
          toast.error("Invalid email");
        }else{
          const validuser=resp.find((user)=>user.registerpass===loginpass);
          if(validuser){
            toast.success("Successfully Logged in.");
            sessionStorage.setItem("name",registeruser);
            navigate('/homepage');
          }else{
            toast.error("Invalid password");
          }
        }
      })
      .catch((err)=>{
        toast.error("Login failed due to "+err.message);
      })
    }
  }


  const validate=()=>{
    let result=true;
    let errmes="Please enter a valid "
    if(loginemail==='' || loginemail==null){
      result=false;
      errmes += 'Email ';
    }else if(loginpass==='' || loginpass===null){
      result=false;
      errmes += 'Password ';
    }
    if(!result)
    {
      toast.warning(errmes);
    }
    return result;
  }

  const IsValidate=()=>{
     let isproceed=true;
     let errmessage="Please enter value in ";
     if(registeruser===null || registeruser===''){
      isproceed=false;
      errmessage += 'Username ';
     }
     else if(registeremail===null || registeremail===''){
      isproceed=false;
      errmessage += 'Email ';
     }
     else if(registerpass===null || registerpass===''){
      isproceed=false;
      errmessage += 'Password';
     }
     if(!isproceed){
      toast.warning(errmessage);
     }else{
      if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(registeremail)){}
      else{
        isproceed=false;
        toast.warning("Please enter a valid email");
      }
     }
     return isproceed;
  } 

  const handleSubmitregister=(e)=>{
    e.preventDefault();
    let registerobj={registeruser,registeremail,registerpass};
    if(IsValidate()){
    fetch(`http://localhost:8000/users`,{
      method:"POST",
      headers:{'content-type':'application/json'},
      body:JSON.stringify(registerobj)
    }).then((registerres)=>{
      toast.success('Registered Successfully.');
    }).catch((err)=>{
      toast.error('Registration Failed :'+err.message);
    });
  }
}    

  function passCheck(data){
    var passClass = document.getElementsByClassName('password-check');
     const number=new RegExp('(?=.*[0-9])');
     const specialChar=new RegExp('(?=.*[!@#\$%\^&\*])');
     const eightChar=new RegExp('(?=.{8,})');
     const uppercase=new RegExp('(?=.*[A-Z])');

     if(eightChar.test(data)){
          passClass[0].style.color = "green";
    }else{
          passClass[0].style.color = "grey";
    }
     if(number.test(data)){
          passClass[1].style.color = "green";
    }else{
          passClass[1].style.color = "grey";
    }
     if(specialChar.test(data)){
          passClass[2].style.color = "green";
    }else{
          passClass[2].style.color = "grey";
    }
     if(uppercase.test(data)){
          passClass[3].style.color = "green";
    }else{
          passClass[3].style.color = "grey";
    }
  }

  return (
    <div className='top-container'>
    <header>
        <h2 class="logo">FUNDRAISER.Inc</h2>
        <nav class="navigation">
            <a href='/homepage'>Home</a>
            <a href='/about'>About</a>
            <a href='/fundraisermainpage'>Services</a>
           <a href='/contact'>Contact</a>
        </nav>
    </header>
    <div className='wrapper'>
        <div className='form-login'>
            <h2>Login</h2>
            <form onSubmit={ProceedLogin} noValidate>
                <div className='input-box'>
                    <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></span>
                    <input value={loginemail} onChange={ee=>setLoginemail(ee.target.value)} type="text" required></input>
                    <label>Email</label> 
                </div>
                <div className='input-box'>
                    <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-key-round"><path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"/><circle cx="16.5" cy="7.5" r=".5"/></svg></span>
                    <input value={loginpass} onChange={ee=>setLoginpass(ee.target.value)} type="text" required></input>
                    <label>Password</label> 
                </div>
                <div className='remember-forget'>
                    <label>
                    <input type='checkbox'/>Remember me</label>
                    <a href="#">Forgot Password?</a>
                </div>
                <button type="submit" class="btn-login" onSubmit={ProceedLogin}>Login</button>
                <div className='login-register'>
                    <p>Don't have an account ?<a href="#" className='register-link'>Register</a></p>
                </div>
            </form>
        </div>

        <div className='form-register'>
            <h2>Registration</h2>
            <form onSubmit={handleSubmitregister}>
                <div className='input-box'>
                    <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-circle-2"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg></span>
                    <input value={registeruser} onChange={e=>setRegisteruser(e.target.value)} type="text" required></input>
                    <label>Username</label> 
                </div>
                <div className='input-box'>
                    <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></span>
                    <input value={registeremail} onChange={e=>setRegisteremail(e.target.value)} type="text" required></input>
                    <label>Email</label> 
                </div>
                <div className='input-box'>
                    <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-key-round"><path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"/><circle cx="16.5" cy="7.5" r=".5"/></svg></span>
                    <input value={registerpass} onChange={e=>setRegisterpass(e.target.value)} type="text" autoComplete='off' name='password' onKeyUp={(e)=>passCheck(e.target.value)} required></input>
                    <label>Password</label> 
                </div>
                <div style={{marginTop:'-20px',marginBottom:'18px'}}>
                  <p>
                    <label className='password-check'> 8 characters </label><br></br>
                    <label className='password-check'> 1 number </label><br></br>
                    <label className='password-check'> 1 special character </label><br></br>
                    <label className='password-check'> 1 uppercase character </label><br></br>
                  </p>
                </div>
                <div className='remember-forget'> 
                    <label>
                    <input type='checkbox'/>I agree to terms & conditions <a onClick={(e)=>{navigate('/terms')}}>more</a>
                    </label>
                </div>
                <button type='submit' class="btn-login" onClick={handleSubmitregister}>Register</button>
                <div className='login-register'>
                    <p>Already have an account ?<a href="#" className='login-link'>Login</a></p>
                </div>
            </form>
        </div>
    </div>
    <ToastContainer theme='colored'/>
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
