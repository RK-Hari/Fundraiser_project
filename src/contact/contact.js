import * as React from 'react';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import './contact.css';
import { Link } from 'react-router-dom'

const Contact = () => {
    const [value, setValue] = React.useState(0);
    return (
      <div className='main'>
    <Link to="/"><h1 style={{display:'flex',justifyContent:'center',textAlign:'center',paddingTop:'25px',textDecoration: 'none',borderBottom: 'none'}} className='h1-text-top'>Fundraiser.Inc</h1></Link>
    <div className='image-contact-container'>
    <div className='Image'></div>
    <div className='container'>
        <h1 className='h1-text'>Contact Us :</h1>
        <p className='para-text'>We are here to help you at every now and then,feel free to contact us at anytime.</p>
        <div className='inputs-1'>
        <TextField id="outlined-basic" label="Name" variant="outlined" required/><br></br><br></br>
        <TextField id="outlined-basic" label="Email" variant="outlined" required/>
         </div>
        <div className='inputs-2'>
            <label>Enter your concern : </label><br></br>
        <TextField
          id="outlined-multiline-static"
          label="Enter Message*"
          multiline
          rows={4}
        />
        </div>
        <div className='rating'>
        <Typography component="legend">Rate out platform : </Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }} size="large"/>
        </div>
    <div className='buttons'>
      <Button variant="contained" color="success">
        Submit
      </Button>
      <Button variant="outlined" color="error">
        Clear
      </Button>
      </div>
    </div>
    </div>
    <div className='line'></div>
    <div className='contact-container'>
      <div className='one'>
          <label style={{fontSize:'large'}}>BY PHONE</label><br></br><br></br>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          <br></br><br></br>
          <p style={{fontSize:'medium'}}>"Call us anytime, your solutions are just a ring away, where assistance meets convenience!"</p>
          <button>Call us now</button>
      </div>
      <div className='line-between'></div>
      <div className='two'>
          <label style={{fontSize:'large'}}>HELP CENTER</label><br></br><br></br>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-life-buoy"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/><circle cx="12" cy="12" r="4"/></svg>
          <br></br><br></br>
          <p style={{fontSize:'medium'}}>"Guiding you through every question, making help as easy as a breeze!"</p>
          <button>Get location</button>
      </div>
      <div className='line-between'></div>
      <div className='three'>
          <label style={{fontSize:'large'}}>LIVE CHAT</label><br></br><br></br>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bot"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
          <br></br><br></br>
          <p style={{fontSize:'medium'}}>"Chat with us live, because your queries deserve instant attention – where support meets speed!"</p>
          <button>Chat with us</button>
      </div>
    </div>
  </div>
  )
}

export default Contact
