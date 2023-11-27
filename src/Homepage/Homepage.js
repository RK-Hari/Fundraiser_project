import React from 'react'
import './HomePage.css'
import {Routes,Route,BrowserRouter,Link} from 'react-router-dom';
export default function HomePage() {
  return (
    <div className='mainbody'>
        <div className='navbar'>
            <div className='nav1' style={{height:'80px'}}>
                <h1 style={{marginTop:'15px'}}>FUNDRAISER.Inc</h1>
            </div>
            <div className='nav2'>
                <ul className='navlist' style={{marginTop:'15px'}}>
                    <li className='liststy'>About</li>
                    <Link to="/contact"><li className='liststy'>Contact</li></Link>
                    <Link to="/fundraisermainpage"><li className='liststy'>Services</li></Link>
                </ul>
            </div>
        </div>
        <h1 style={{paddingTop:'20px'}} className='topicsty'>Let's <g className='decorsty'>Rise</g> Fund Together</h1>
        <div className='divpage1'>
            <div className='div1front'>
                <h1 style={{marginTop:'45px'}} className='div1txt'>Empower your cause with donating where every <br></br><g className='decorsty'>donation creates</g> a ripple effect of <g className='decorsty'>positive changes</g>...</h1><br></br>
                <div className='div1p'>
                  <p>Don' Worry you are in right place...</p><hr></hr>
                  <p>With 0% platform fee,you can raise your fund</p><br></br>
                </div>
                <Link to="/fundraisermainpage"><button className='butsty2'>Start Raising Fund</button></Link>
            </div>
            <div>
                <img src='https://i.pinimg.com/236x/f4/ef/02/f4ef02c5da0fc4fdaf19c057e0acbc55.jpg' alt='' className='div1img' style={{marginRight:'70px'}}></img>
            </div>
        </div>
        <div className='divpage2'>
            <div>
                <img src='https://i.pinimg.com/564x/87/7e/32/877e320f6290b7f72ce75f6a2b7c9c0f.jpg' alt='' className='div2img' ></img>
            </div>
            <div className='div2txt'>
                <h2 className='p2sty' style={{marginTop:'20px'}}>
                    It's your Special Day
                </h2>
                <p style={{color:'black',fontSize:'20px',textAlign:'left'}}>
                    These poor people need big help. Help them to survive from disaster by Donating them. <br></br>
                    They had stucked during earthquakes and starving for two days. Only people can go.<br></br>
                    Neither machineries nor Rescue Team can go there.
                </p>
                <button style={{marginTop:'15px'}} className='butsty1'>Help them</button>
            </div>
        </div>
        <div className='divpage4'>
            <div className='div4flex1'>
                <h1 className='div4head'>How to Start</h1>
                <div className='div4parasty'><h2 className='div4hsty'>1.<br></br> Start a free fundraiser</h2>
                <p className='div4psty'>Create your own fundraiser by adding necessary details.</p><hr></hr></div>
                <div className='div4parasty'><h2 className='div4hsty'>2. <br></br>Share your Fundraiser</h2>
                <p className='div4psty'>Share your fundraiser with friends and family and strangers to raise funds.</p><hr></hr></div>
                <div className='div4parasty'><h2 className='div4hsty'>3.<br></br> Withdraw All Donations</h2>
                <p className='div4psty'>Withdraw all your money at certain point and help poor people.</p><hr></hr></div>
            </div>
            <div className='div4imgflex'>
                <div className='div4flex2'>
                    <img src='https://i.pinimg.com/236x/48/d0/09/48d0094500febd06b229a9ac1e020fec.jpg' className='div4imgsty' alt=''></img>
                </div>
                <div className='div4flex2'>
                    <img src='https://i.pinimg.com/236x/22/bf/09/22bf097b9eede9ddf100c906fcf02b03.jpg' className='div4imgsty' alt=''></img>
                </div>
                <div className='div4flex2'>
                    <img src='https://i.pinimg.com/236x/33/1a/dd/331add6878bba9df5dfb49af6e3c0534.jpg' className='div4imgsty' alt=''></img>
                </div>
            </div>
        </div>
        <div className='divpage2_1'>
            <div className='div21pagediv1' style={{height:'450px'}}>
                <h1 className='div21pagehead' style={{textAlign:'center'}}>Reason of Helping</h1><br></br>
                <p className='div21div' style={{marginLeft:'30px'}}>We're reaching out to you for support in our fundraising campaign.<br></br>
                    Your contribution will directly fuel our mission <g style={{color:'#28a745'}}>fundraising</g>.<br></br>
                    With your help, we can make a real impact and bring  <br></br><g style={{color:'#28a745'}}>positive change to poor people</g>.
                    Join us on this journey by donating today.<br></br> Your support is crucial, and every contribution gets us closer to our goal.<br></br>
                    Together,  let's make a difference and create a <g style={{color:'#28a745'}}>better tomorrow</g></p>
            </div>
            <div>
                <img src='https://static.vecteezy.com/system/resources/previews/018/742/183/non_2x/3d-minimal-front-blank-pie-chart-icon-business-analysis-marketing-data-analysis-pie-chart-template-for-inserting-information-3d-illustration-free-png.png' className='div3img'></img>
            </div>
        </div>
        <div className='divpage5'>
            <h1 className='div5head' style={{textAlign:'center'}}>Why FUNDRAISER.Inc</h1>
            <div className='div5flex'>
                <div>
                    <img src='https://tse3.mm.bing.net/th?id=OIP.VPmamIy2Hx7Bc9Ti9MEnFgHaE3&pid=Api&P=0&h=180' alt='' className='div5imgsty'></img>
                    <h4>Free of Cost</h4>
                </div>
                <div>
                    <img src='https://i.pinimg.com/736x/d8/e2/14/d8e214fa790d8be22d68cc0a7bf24713.jpg' alt='' className='div5imgsty'></img>
                    <h4>1M+ Donar</h4>
                </div>
                <div>
                    <img src='https://img.freepik.com/premium-vector/round-clock-24-7-service-icon-monochrome-style-vector-illustration_255502-697.jpg ' alt='' className='div5imgsty'></img>
                    <h4>24x7 Service</h4>
                </div>
                <div>
                    <img src='https://static.thenounproject.com/png/371282-200.png' alt='' className='div5imgsty'></img>
                    <h4>All payments<br></br> Accepted</h4>
                </div>
                <div>
                    <img src='https://t3.ftcdn.net/jpg/03/14/26/24/360_F_314262483_kUJZqMaKHUnnMitF70FZkES7kqwYHFVs.jpg' alt='' className='div5imgsty'></img>
                    <h4>User-Friendly</h4>
                </div>
                <div>
                    <img src='https://cdn-icons-png.flaticon.com/512/5110/5110198.png' alt='' className='div5imgsty'></img>
                    <h4>Easy-to-Use</h4>
                </div>
            </div>
        </div>
        <div className='divpage3'>
            <div className='div3box'>
                <h1 className='p2sty'>Our Mission</h1>
                <p>
                    Our main aim is to help poor people by fund raising.<br></br>
                    We are doing it as a Services to help people.
                </p><br></br>
                <Link to="/about"><button style={{marginLeft:'-10px'}} className='butsty1'>Learn More</button></Link>
            </div>
            <div className='div3box'>
                <h1 className='p2sty'>Why Support Us?</h1>
                <p>
                    Supporting us makes our Work easy.<br></br>
                    Also makes yourself Satisfied...
                </p><br></br>
                <Link to="/about"><button style={{marginLeft:'-10px'}} className='butsty1'>Learn More</button></Link>
            </div >
            <div className='div3box'>
                <h1 className='p2sty'>How you can Help?</h1>
                <p>
                    You can help us through online payments.<br></br>
                    You can also use debit cards or upi payments..<br></br>
                </p><br></br>
                <Link to="/about"><button style={{marginLeft:'-10px'}} className='butsty1'>Learn More</button></Link>
            </div>
        </div>
        <div className='navbar2' style={{height:'100px'}}>
            <div>
                <ul className='navlist2' style={{marginTop:'40px',marginLeft:'50px'}}>
                <svg xmlns="http://www.w3.org/2000/svg" className='iconimg' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className='iconimg' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className='iconimg' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scroll-text"><path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"/><path d="M19 17V5a2 2 0 0 0-2-2H4"/><path d="M15 8h-5"/><path d="M15 12h-5"/></svg>
                </ul>
            </div>
            <div className='nav2' style={{marginTop:'40px',marginLeft:'70px'}}>
                <ul className='navlist2'>
                    <img src='https://i.pinimg.com/564x/e1/11/9c/e1119cf475adcb9932608f7125fb0cbf.jpg' alt='' className='iconimg' style={{marginTop:'-10px'}}></img>
                    <img src='https://i.pinimg.com/236x/23/6a/4e/236a4e7b01a79e5c18001dec5229865c.jpg' alt='' className='iconimg' style={{marginTop:'-10px'}}></img>
                    <img src='https://i.pinimg.com/236x/f5/28/15/f528150e5df2db5c506d283bce4e88b1.jpg' alt='' className='iconimg' style={{marginTop:'-10px'}}></img>
                </ul>
            </div>
        </div>
    </div>
  )
}