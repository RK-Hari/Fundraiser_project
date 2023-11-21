import React, { useState } from 'react';
import './funraiser.css'
function Fundraiser() {
  const [goal, setGoal] = useState(1000);
  const [raised, setRaised] = useState(0);
  const [donationAmount, setDonationAmount] = useState(0);

  const handleDonation = () => {
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
    }else{
      alert("Enter a valid amount");
    }
  }
  return (
  <div className='container'>
    <div className='image-set'>
        <h1>Your image</h1>
    </div>
    <div className="Fundraiser">
      <div className='text-fund'>
      <h1>Fundraiser</h1>
      </div>
      <div>
        <p>Goal: ₹{goal}</p>
        <p>Raised: ₹{raised}</p>
        <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <label htmlFor="donationAmount">Enter Donation Amount  :</label>
          <input
            placeholder='Enter Amount'
            type="text"
            id="donationAmount"
            onChange={(e) => setDonationAmount(parseInt(e.target.value))}
          />
          <button onClick={handleDonation}>Donate</button>
          <button className='share-button'>Share</button>
        </div>
       <p>Progress:</p>
       <progress
      style={{
      backgroundColor: raised <= goal * 0.3 ? '#880808' : (raised <= goal * 0.65 ? '#ffeb3b' : '#4caf50'),
      borderRadius: '20px',
      transition: 'width 3.0s ease-out',
      }}
      value={raised}
      max={goal}></progress>
    </div>
  </div>
</div>
  );
}
export default Fundraiser