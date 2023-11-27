import React, { useState } from 'react';
import './Fundraiser.css'
function Fundraiser() {

  const [goal, setGoal] = useState(1000000);
  const [raised, setRaised] = useState(0);
  const [donationAmount, setDonationAmount] = useState(0);
  const [history, setHistory] = useState([]);

  const handleDonation = () => {
    setHistory([...history, donationAmount]);
    if (donationAmount > 0) {
      setRaised(raised + donationAmount);
      setDonationAmount(0);
      var options = {
        key: "rzp_test_VNP0v0sZEC0YFa",
        key_secret:"CTRPfAZpVDoOXtXcaT93UHY1",
        amount : donationAmount*100,
        currency:"INR",
        name:"Demo_for_project",
        description:"For testing purpose",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill:{
          name:"demo",
          email:"demo123@gmail.com",
          contact:"1234567890"
        },
        notes:{
          address:"Razorpay corporate office"
        },
        theme:{
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
    else{
      alert("Enter a valid amount");
    }
  }
  return (
    <div className='container'>
      <div className='navbar'>
            <div className='nav1'>
                <h1 style={{marginTop:'13px'}}>FUNDRAISER.Inc</h1>
            </div>
            <div className='nav2'>
                <ul className='navlist' style={{marginTop:'13px'}}>
                    <li className='liststy'>Home</li>
                    <li className='liststy'>About</li>
                    <li className='liststy'>Contact</li>
                </ul>
            </div>
      </div>
          <div className='headflex'>
            <div className='fundimg'>
              <img src='https://i.pinimg.com/564x/fa/1d/77/fa1d770c3b18e4291ad30ba5a5974feb.jpg' alt='' className='fundimgsty'></img> 
            </div>
            <div className="Fundraiser">
                <input style={{marginLeft:'100px',marginTop:'20px'}} className='box1' placeholder='Enter Amount' type="text" id="donationAmount"
                  onChange={(e) => setDonationAmount(parseInt(e.target.value))}/>
                  <br></br><br></br>
                <button className='butsty1' onClick={handleDonation}>Contribute NOW</button><br></br><br></br>
                <button className='butsty1'>Spread the WORD</button>
                <p className='psty2'>Raised: ₹{raised}</p>
                <p className='psty1'>Goal: ₹{goal}</p>
                <p className='psty3' style={{marginBottom:'10px'}}>Progress:</p>
                <progress
                style={{
                  backgroundColor: raised <= goal * 0.3 ? '#880808' : (raised <= goal * 0.65 ? '#ffeb3b' : '#4caf50'),
                  transition: 'width 3.0s ease-out',
                  border:'none',borderRadius:'15px',marginLeft:'155px'
                }}
                value={raised}
                max={goal}></progress><br></br><br></br>
            </div>
                  <div className='histbody' style={{width:'200px'}}>
                    <h2 className='histh' style={{marginTop:'0px',marginLeft:'43px',marginBottom:'10px'}} >History</h2>
                    <ul style={{marginLeft:'45px'}} className='histlist'>
                      {history.map((item, index) => (
                        <li className='histlistitem' key={index}>Donation : {item}</li>
                      ))}
                    </ul>
                  </div>
      </div>
          <div className='aboutflex'>
              <div className='about'>
                <h1 className='abouthsty'>About Fundraiser</h1>
                <p className='aboutpsty'>I regret to inform you that Sivram has been admitted to Apollo Hospital for cancer treatment. 
                We kindly request your thoughts and prayers during this challenging time. The medical team is dedicated to
                 providing the best care possible, and we appreciate your support as we navigate through this difficult journey. 
                 Further updates will be shared as they become available. Thank you for respecting the privacy of the family during this 
                 sensitive period</p>
              </div>
              <div className='statistics'>
                <h2 style={{textAlign:'center'}}>Statistics</h2>
                <b style={{marginLeft:'35px'}}>Donation : ₹1,000,000</b><br></br><br></br>
                <b style={{marginLeft:'35px'}}>Level : All over India</b><br></br><br></br>
                <b style={{marginLeft:'35px'}}>No.of People Donated : 4.5k</b><br></br><br></br>
                <img src='https://tse1.mm.bing.net/th?id=OIP.q7oKBN_l2T6BXxLkOibYKQHaBf&pid=Api&P=0&h=180' alt='' className='statisimgsty'></img>
              
              </div>
          </div>
      <div className='navbar2'>
         <div style={{marginTop:'20px'}}>
             <ul className='navlist2'>
             <svg xmlns="http://www.w3.org/2000/svg" className='iconimg' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
             <svg xmlns="http://www.w3.org/2000/svg" className='iconimg' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
             <svg xmlns="http://www.w3.org/2000/svg" className='iconimg' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scroll-text"><path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"/><path d="M19 17V5a2 2 0 0 0-2-2H4"/><path d="M15 8h-5"/><path d="M15 12h-5"/></svg>
             </ul>
         </div>
         <div className='nav2' style={{height:'50px'}}>
             <ul className='navlist2' style={{marginTop:'12px'}}>
                 <b>Contact us on</b>
                 <img src='https://i.pinimg.com/564x/e1/11/9c/e1119cf475adcb9932608f7125fb0cbf.jpg' alt='' className='iconimg' style={{marginTop:'-10px'}}></img>
                 <img src='https://i.pinimg.com/236x/23/6a/4e/236a4e7b01a79e5c18001dec5229865c.jpg' alt='' className='iconimg' style={{marginTop:'-10px'}}></img>
                 <img src='https://i.pinimg.com/236x/f5/28/15/f528150e5df2db5c506d283bce4e88b1.jpg' alt='' className='iconimg' style={{marginTop:'-10px'}}></img>
             </ul>
         </div>
      </div>

    </div>
  );
}
export default Fundraiser