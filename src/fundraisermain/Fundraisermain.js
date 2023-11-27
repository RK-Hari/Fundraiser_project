import React from 'react'
import './Fundraisermain.css';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Switch from '@mui/material/Switch';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useContext,createContext } from 'react';
import Mycontext from './context.js';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const countries = [
    { code: 'AD', label: 'Andorra', phone: '376' },
    {
      code: 'AE',
      label: 'United Arab Emirates',
      phone: '971',
    },
    { code: 'AF', label: 'Afghanistan', phone: '93' },
    {
      code: 'AG',
      label: 'Antigua and Barbuda',
      phone: '1-268',
    },
    { code: 'AI', label: 'Anguilla', phone: '1-264' },
    { code: 'AL', label: 'Albania', phone: '355' },
    { code: 'AM', label: 'Armenia', phone: '374' },
    { code: 'AO', label: 'Angola', phone: '244' },
    { code: 'AQ', label: 'Antarctica', phone: '672' },
    { code: 'AR', label: 'Argentina', phone: '54' },
    { code: 'AS', label: 'American Samoa', phone: '1-684' },
    { code: 'AT', label: 'Austria', phone: '43' },
    {
      code: 'AU',
      label: 'Australia',
      phone: '61',
      suggested: true,
    },
    { code: 'AW', label: 'Aruba', phone: '297' },
    { code: 'AX', label: 'Alland Islands', phone: '358' },
    { code: 'AZ', label: 'Azerbaijan', phone: '994' },
    {
      code: 'BA',
      label: 'Bosnia and Herzegovina',
      phone: '387',
    },
    { code: 'BB', label: 'Barbados', phone: '1-246' },
    { code: 'BD', label: 'Bangladesh', phone: '880' },
    { code: 'BE', label: 'Belgium', phone: '32' },
    { code: 'BF', label: 'Burkina Faso', phone: '226' },
    { code: 'BG', label: 'Bulgaria', phone: '359' },
    { code: 'BH', label: 'Bahrain', phone: '973' },
    { code: 'BI', label: 'Burundi', phone: '257' },
    { code: 'BJ', label: 'Benin', phone: '229' },
    { code: 'BL', label: 'Saint Barthelemy', phone: '590' },
    { code: 'BM', label: 'Bermuda', phone: '1-441' },
    { code: 'BN', label: 'Brunei Darussalam', phone: '673' },
    { code: 'BO', label: 'Bolivia', phone: '591' },
    { code: 'BR', label: 'Brazil', phone: '55' },
    { code: 'BS', label: 'Bahamas', phone: '1-242' },
    { code: 'BT', label: 'Bhutan', phone: '975' },
    { code: 'BV', label: 'Bouvet Island', phone: '47' },
    { code: 'BW', label: 'Botswana', phone: '267' },
    { code: 'BY', label: 'Belarus', phone: '375' },
    { code: 'BZ', label: 'Belize', phone: '501' },
    {
      code: 'CA',
      label: 'Canada',
      phone: '1',
      suggested: true,
    },
    {
      code: 'CC',
      label: 'Cocos (Keeling) Islands',
      phone: '61',
    },
    {
      code: 'CD',
      label: 'Congo, Democratic Republic of the',
      phone: '243',
    },
    {
      code: 'CF',
      label: 'Central African Republic',
      phone: '236',
    },
    {
      code: 'CG',
      label: 'Congo, Republic of the',
      phone: '242',
    },
    { code: 'CH', label: 'Switzerland', phone: '41' },
    { code: 'CI', label: "Cote d'Ivoire", phone: '225' },
    { code: 'CK', label: 'Cook Islands', phone: '682' },
    { code: 'CL', label: 'Chile', phone: '56' },
    { code: 'CM', label: 'Cameroon', phone: '237' },
    { code: 'CN', label: 'China', phone: '86' },
    { code: 'CO', label: 'Colombia', phone: '57' },
    { code: 'CR', label: 'Costa Rica', phone: '506' },
    { code: 'CU', label: 'Cuba', phone: '53' },
    { code: 'CV', label: 'Cape Verde', phone: '238' },
    { code: 'CW', label: 'Curacao', phone: '599' },
    { code: 'CX', label: 'Christmas Island', phone: '61' },
    { code: 'CY', label: 'Cyprus', phone: '357' },
    { code: 'CZ', label: 'Czech Republic', phone: '420' },
    {
      code: 'DE',
      label: 'Germany',
      phone: '49',
      suggested: true,
    },
    { code: 'DJ', label: 'Djibouti', phone: '253' },
    { code: 'DK', label: 'Denmark', phone: '45' },
    { code: 'DM', label: 'Dominica', phone: '1-767' },
    {
      code: 'DO',
      label: 'Dominican Republic',
      phone: '1-809',
    },
    { code: 'DZ', label: 'Algeria', phone: '213' },
    { code: 'EC', label: 'Ecuador', phone: '593' },
    { code: 'EE', label: 'Estonia', phone: '372' },
    { code: 'EG', label: 'Egypt', phone: '20' },
    { code: 'EH', label: 'Western Sahara', phone: '212' },
    { code: 'ER', label: 'Eritrea', phone: '291' },
    { code: 'ES', label: 'Spain', phone: '34' },
    { code: 'ET', label: 'Ethiopia', phone: '251' },
    { code: 'FI', label: 'Finland', phone: '358' },
    { code: 'FJ', label: 'Fiji', phone: '679' },
    {
      code: 'FK',
      label: 'Falkland Islands (Malvinas)',
      phone: '500',
    },
    {
      code: 'FM',
      label: 'Micronesia, Federated States of',
      phone: '691',
    },
    { code: 'FO', label: 'Faroe Islands', phone: '298' },
    {
      code: 'FR',
      label: 'France',
      phone: '33',
      suggested: true,
    },
    { code: 'GA', label: 'Gabon', phone: '241' },
    { code: 'GB', label: 'United Kingdom', phone: '44' },
    { code: 'GD', label: 'Grenada', phone: '1-473' },
    { code: 'GE', label: 'Georgia', phone: '995' },
    { code: 'GF', label: 'French Guiana', phone: '594' },
    { code: 'GG', label: 'Guernsey', phone: '44' },
    { code: 'GH', label: 'Ghana', phone: '233' },
    { code: 'GI', label: 'Gibraltar', phone: '350' },
    { code: 'GL', label: 'Greenland', phone: '299' },
    { code: 'GM', label: 'Gambia', phone: '220' },
    { code: 'GN', label: 'Guinea', phone: '224' },
    { code: 'GP', label: 'Guadeloupe', phone: '590' },
    { code: 'GQ', label: 'Equatorial Guinea', phone: '240' },
    { code: 'GR', label: 'Greece', phone: '30' },
    {
      code: 'GS',
      label: 'South Georgia and the South Sandwich Islands',
      phone: '500',
    },
    { code: 'GT', label: 'Guatemala', phone: '502' },
    { code: 'GU', label: 'Guam', phone: '1-671' },
    { code: 'GW', label: 'Guinea-Bissau', phone: '245' },
    { code: 'GY', label: 'Guyana', phone: '592' },
    { code: 'HK', label: 'Hong Kong', phone: '852' },
    {
      code: 'HM',
      label: 'Heard Island and McDonald Islands',
      phone: '672',
    },
    { code: 'HN', label: 'Honduras', phone: '504' },
    { code: 'HR', label: 'Croatia', phone: '385' },
    { code: 'HT', label: 'Haiti', phone: '509' },
    { code: 'HU', label: 'Hungary', phone: '36' },
    { code: 'ID', label: 'Indonesia', phone: '62' },
    { code: 'IE', label: 'Ireland', phone: '353' },
    { code: 'IL', label: 'Israel', phone: '972' },
    { code: 'IM', label: 'Isle of Man', phone: '44' },
    { code: 'IN', label: 'India', phone: '91' },
    {
      code: 'IO',
      label: 'British Indian Ocean Territory',
      phone: '246',
    },
    { code: 'IQ', label: 'Iraq', phone: '964' },
    {
      code: 'IR',
      label: 'Iran, Islamic Republic of',
      phone: '98',
    },
    { code: 'IS', label: 'Iceland', phone: '354' },
    { code: 'IT', label: 'Italy', phone: '39' },
    { code: 'JE', label: 'Jersey', phone: '44' },
    { code: 'JM', label: 'Jamaica', phone: '1-876' },
    { code: 'JO', label: 'Jordan', phone: '962' },
    {
      code: 'JP',
      label: 'Japan',
      phone: '81',
      suggested: true,
    },
    { code: 'KE', label: 'Kenya', phone: '254' },
    { code: 'KG', label: 'Kyrgyzstan', phone: '996' },
    { code: 'KH', label: 'Cambodia', phone: '855' },
    { code: 'KI', label: 'Kiribati', phone: '686' },
    { code: 'KM', label: 'Comoros', phone: '269' },
    {
      code: 'KN',
      label: 'Saint Kitts and Nevis',
      phone: '1-869',
    },
    {
      code: 'KP',
      label: "Korea, Democratic People's Republic of",
      phone: '850',
    },
    { code: 'KR', label: 'Korea, Republic of', phone: '82' },
    { code: 'KW', label: 'Kuwait', phone: '965' },
    { code: 'KY', label: 'Cayman Islands', phone: '1-345' },
    { code: 'KZ', label: 'Kazakhstan', phone: '7' },
    {
      code: 'LA',
      label: "Lao People's Democratic Republic",
      phone: '856',
    },
    { code: 'LB', label: 'Lebanon', phone: '961' },
    { code: 'LC', label: 'Saint Lucia', phone: '1-758' },
    { code: 'LI', label: 'Liechtenstein', phone: '423' },
    { code: 'LK', label: 'Sri Lanka', phone: '94' },
    { code: 'LR', label: 'Liberia', phone: '231' },
    { code: 'LS', label: 'Lesotho', phone: '266' },
    { code: 'LT', label: 'Lithuania', phone: '370' },
    { code: 'LU', label: 'Luxembourg', phone: '352' },
    { code: 'LV', label: 'Latvia', phone: '371' },
    { code: 'LY', label: 'Libya', phone: '218' },
    { code: 'MA', label: 'Morocco', phone: '212' },
    { code: 'MC', label: 'Monaco', phone: '377' },
    {
      code: 'MD',
      label: 'Moldova, Republic of',
      phone: '373',
    },
    { code: 'ME', label: 'Montenegro', phone: '382' },
    {
      code: 'MF',
      label: 'Saint Martin (French part)',
      phone: '590',
    },
    { code: 'MG', label: 'Madagascar', phone: '261' },
    { code: 'MH', label: 'Marshall Islands', phone: '692' },
    {
      code: 'MK',
      label: 'Macedonia, the Former Yugoslav Republic of',
      phone: '389',
    },
    { code: 'ML', label: 'Mali', phone: '223' },
    { code: 'MM', label: 'Myanmar', phone: '95' },
    { code: 'MN', label: 'Mongolia', phone: '976' },
    { code: 'MO', label: 'Macao', phone: '853' },
    {
      code: 'MP',
      label: 'Northern Mariana Islands',
      phone: '1-670',
    },
    { code: 'MQ', label: 'Martinique', phone: '596' },
    { code: 'MR', label: 'Mauritania', phone: '222' },
    { code: 'MS', label: 'Montserrat', phone: '1-664' },
    { code: 'MT', label: 'Malta', phone: '356' },
    { code: 'MU', label: 'Mauritius', phone: '230' },
    { code: 'MV', label: 'Maldives', phone: '960' },
    { code: 'MW', label: 'Malawi', phone: '265' },
    { code: 'MX', label: 'Mexico', phone: '52' },
    { code: 'MY', label: 'Malaysia', phone: '60' },
    { code: 'MZ', label: 'Mozambique', phone: '258' },
    { code: 'NA', label: 'Namibia', phone: '264' },
    { code: 'NC', label: 'New Caledonia', phone: '687' },
    { code: 'NE', label: 'Niger', phone: '227' },
    { code: 'NF', label: 'Norfolk Island', phone: '672' },
    { code: 'NG', label: 'Nigeria', phone: '234' },
    { code: 'NI', label: 'Nicaragua', phone: '505' },
    { code: 'NL', label: 'Netherlands', phone: '31' },
    { code: 'NO', label: 'Norway', phone: '47' },
    { code: 'NP', label: 'Nepal', phone: '977' },
    { code: 'NR', label: 'Nauru', phone: '674' },
    { code: 'NU', label: 'Niue', phone: '683' },
    { code: 'NZ', label: 'New Zealand', phone: '64' },
    { code: 'OM', label: 'Oman', phone: '968' },
    { code: 'PA', label: 'Panama', phone: '507' },
    { code: 'PE', label: 'Peru', phone: '51' },
    { code: 'PF', label: 'French Polynesia', phone: '689' },
    { code: 'PG', label: 'Papua New Guinea', phone: '675' },
    { code: 'PH', label: 'Philippines', phone: '63' },
    { code: 'PK', label: 'Pakistan', phone: '92' },
    { code: 'PL', label: 'Poland', phone: '48' },
    {
      code: 'PM',
      label: 'Saint Pierre and Miquelon',
      phone: '508',
    },
    { code: 'PN', label: 'Pitcairn', phone: '870' },
    { code: 'PR', label: 'Puerto Rico', phone: '1' },
    {
      code: 'PS',
      label: 'Palestine, State of',
      phone: '970',
    },
    { code: 'PT', label: 'Portugal', phone: '351' },
    { code: 'PW', label: 'Palau', phone: '680' },
    { code: 'PY', label: 'Paraguay', phone: '595' },
    { code: 'QA', label: 'Qatar', phone: '974' },
    { code: 'RE', label: 'Reunion', phone: '262' },
    { code: 'RO', label: 'Romania', phone: '40' },
    { code: 'RS', label: 'Serbia', phone: '381' },
    { code: 'RU', label: 'Russian Federation', phone: '7' },
    { code: 'RW', label: 'Rwanda', phone: '250' },
    { code: 'SA', label: 'Saudi Arabia', phone: '966' },
    { code: 'SB', label: 'Solomon Islands', phone: '677' },
    { code: 'SC', label: 'Seychelles', phone: '248' },
    { code: 'SD', label: 'Sudan', phone: '249' },
    { code: 'SE', label: 'Sweden', phone: '46' },
    { code: 'SG', label: 'Singapore', phone: '65' },
    { code: 'SH', label: 'Saint Helena', phone: '290' },
    { code: 'SI', label: 'Slovenia', phone: '386' },
    {
      code: 'SJ',
      label: 'Svalbard and Jan Mayen',
      phone: '47',
    },
    { code: 'SK', label: 'Slovakia', phone: '421' },
    { code: 'SL', label: 'Sierra Leone', phone: '232' },
    { code: 'SM', label: 'San Marino', phone: '378' },
    { code: 'SN', label: 'Senegal', phone: '221' },
    { code: 'SO', label: 'Somalia', phone: '252' },
    { code: 'SR', label: 'Suriname', phone: '597' },
    { code: 'SS', label: 'South Sudan', phone: '211' },
    {
      code: 'ST',
      label: 'Sao Tome and Principe',
      phone: '239',
    },
    { code: 'SV', label: 'El Salvador', phone: '503' },
    {
      code: 'SX',
      label: 'Sint Maarten (Dutch part)',
      phone: '1-721',
    },
    {
      code: 'SY',
      label: 'Syrian Arab Republic',
      phone: '963',
    },
    { code: 'SZ', label: 'Swaziland', phone: '268' },
    {
      code: 'TC',
      label: 'Turks and Caicos Islands',
      phone: '1-649',
    },
    { code: 'TD', label: 'Chad', phone: '235' },
    {
      code: 'TF',
      label: 'French Southern Territories',
      phone: '262',
    },
    { code: 'TG', label: 'Togo', phone: '228' },
    { code: 'TH', label: 'Thailand', phone: '66' },
    { code: 'TJ', label: 'Tajikistan', phone: '992' },
    { code: 'TK', label: 'Tokelau', phone: '690' },
    { code: 'TL', label: 'Timor-Leste', phone: '670' },
    { code: 'TM', label: 'Turkmenistan', phone: '993' },
    { code: 'TN', label: 'Tunisia', phone: '216' },
    { code: 'TO', label: 'Tonga', phone: '676' },
    { code: 'TR', label: 'Turkey', phone: '90' },
    {
      code: 'TT',
      label: 'Trinidad and Tobago',
      phone: '1-868',
    },
    { code: 'TV', label: 'Tuvalu', phone: '688' },
    {
      code: 'TW',
      label: 'Taiwan',
      phone: '886',
    },
    {
      code: 'TZ',
      label: 'United Republic of Tanzania',
      phone: '255',
    },
    { code: 'UA', label: 'Ukraine', phone: '380' },
    { code: 'UG', label: 'Uganda', phone: '256' },
    {
      code: 'US',
      label: 'United States',
      phone: '1',
      suggested: true,
    },
    { code: 'UY', label: 'Uruguay', phone: '598' },
    { code: 'UZ', label: 'Uzbekistan', phone: '998' },
    {
      code: 'VA',
      label: 'Holy See (Vatican City State)',
      phone: '379',
    },
    {
      code: 'VC',
      label: 'Saint Vincent and the Grenadines',
      phone: '1-784',
    },
    { code: 'VE', label: 'Venezuela', phone: '58' },
    {
      code: 'VG',
      label: 'British Virgin Islands',
      phone: '1-284',
    },
    {
      code: 'VI',
      label: 'US Virgin Islands',
      phone: '1-340',
    },
    { code: 'VN', label: 'Vietnam', phone: '84' },
    { code: 'VU', label: 'Vanuatu', phone: '678' },
    { code: 'WF', label: 'Wallis and Futuna', phone: '681' },
    { code: 'WS', label: 'Samoa', phone: '685' },
    { code: 'XK', label: 'Kosovo', phone: '383' },
    { code: 'YE', label: 'Yemen', phone: '967' },
    { code: 'YT', label: 'Mayotte', phone: '262' },
    { code: 'ZA', label: 'South Africa', phone: '27' },
    { code: 'ZM', label: 'Zambia', phone: '260' },
    { code: 'ZW', label: 'Zimbabwe', phone: '263' },
  ];
  const Fundraisermain = (props) => {
    
    const navigate=useNavigate();
    
    
    const [checked, setChecked] = React.useState(true);
    
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
    
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
    const changeColor = (event) => {
      document.querySelectorAll('.icon-box label').forEach((label) => {
        label.classList.remove('active');
      });
      event.currentTarget.classList.add('active');
    };
    
    const [fundraiserGoal, setFundraiserGoal] = useState(0);
    
    const handleGoalAmountChange = (event) => {
      const value = event.target.value;
      setFundraiserGoal(value);
    }
    const contextuse=createContext(fundraiserGoal);
    // Mycontext=useContext(fundraiserGoal);
    
  return (
    <>
    <div className='main-container'>
        <div className='header-top'>
        <h2 class="logo" onClick={handleClick}>FUNDRAISER.Inc</h2>
        <nav class="navigation">
            <a href='/homepage'>Home</a>
            <a href='/about'>About</a>
           <a href='/contact'>Contact</a>
        </nav>
        </div>
        <div className='create-raiser'>
            <h1>Intrested in contributing to a Fundraiser !!</h1>
            <h3>We are there to serve and help you!!</h3>
        </div><br></br>
        <div className='basic-text'>
          <h2><a>"Small acts, big impacts.</a> Join hands in our fundraiser and make a difference that <a>lasts a lifetime."</a></h2>
          <p>"In unity, we find strength. Join our fundraiser and let's build a better world, together."</p>
        </div>
        <div className='basic-bottomtext'>
          <p>
          <a>Participating in a fundraiser is more than a financial transaction;</a> it's an invitation to be a part of something transformative. 
          <a>Beyond the tangible benefits of raising funds,</a> fundraisers cultivate <a>a sense of community, empathy, and shared purpose.</a> Each contribution becomes a force for positive change, creating ripples that touch lives and inspire hope. 
          <a>By joining a fundraiser,</a> individuals become catalysts for meaningful <a>transformations, breaking barriers, opening doors, and leaving a lasting legacy of goodwill.</a> 
          <a>The beauty of fundraising</a> lies in its ability to unite people from different walks of <a>life, fostering networks, awareness, and a collective commitment</a> to building a brighter and <a>more compassionate future.</a>
          </p>
          <div className='image-box'></div>
        </div><br></br>
        <h1 style={{marginLeft:'650px'}}>Active Fundraisers</h1>
        <div style={{width:'150px',height:'2px',backgroundColor:'goldenrod',marginLeft:'720px',marginTop:'5px',marginBottom:'15px'}}></div>
        <div className='display-fundraisers' onClick={()=>navigate('/fundraiser')}>
            <div className='display-container'>
              <div className='active-fundraiser-image-1'></div>
              <h4>Help us by donating to save animals</h4>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-circle-2"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>
              <a style={{marginLeft:'108px',color:'black'}}>By_User_1</a>
              <p><a>₹75,689</a> raised out of <a>₹10,00,000</a></p>
              <div className='progress-line' style={{borderRadius:'4px',marginLeft:'45px',marginTop:'10px',height:'5px',width:'240px',backgroundColor:'darkblue'}}></div>
              <div className='progress-line' style={{borderRadius:'4px',marginLeft:'45px',marginTop:'10px',height:'5px',width:'40px',backgroundColor:'skyblue'}}></div>
              <p>Last Donation 34 minutes ago.</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><br></br>
              <a style={{marginLeft:'108px',color:'black'}}>45 Days Left</a>
            </div>
            <div className='display-container'>
              <div className='active-fundraiser-image-2'></div>
              <h4>Donate us to provide medical assisstance</h4> 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-circle-2"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>
              <a style={{marginLeft:'108px',color:'black'}}>By_User_2</a>
              <p><a>₹10,75,689 </a> raised out of <a>₹14,00,000</a></p>
              <div className='progress-line' style={{borderRadius:'4px',marginLeft:'45px',marginTop:'10px',height:'5px',width:'240px',backgroundColor:'darkblue'}}></div>
              <div className='progress-line' style={{borderRadius:'4px',marginLeft:'45px',marginTop:'10px',height:'5px',width:'190px',backgroundColor:'skyblue'}}></div>
              <p>Last Donation 3 Hours ago.</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><br></br>
              <a style={{marginLeft:'108px',color:'black'}}>90 Days Left</a>
            </div>
            <div className='display-container'>
              <div className='active-fundraiser-image-3'></div>
              <h4>Donate us to provide Educational assisstance to poor kids</h4>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-circle-2"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>
              <a style={{marginLeft:'108px',color:'black'}}>By_User_3</a>
              <p><a>₹2,45,689</a> raised out of <a>₹10,00,000</a></p>
              <div className='progress-line' style={{borderRadius:'4px',marginLeft:'45px',marginTop:'10px',height:'5px',width:'240px',backgroundColor:'darkblue'}}></div>
              <div className='progress-line' style={{borderRadius:'4px',marginLeft:'45px',marginTop:'10px',height:'5px',width:'60px',backgroundColor:'skyblue'}}></div>
              <p>Last Donation 1 Hour ago.</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><br></br>
              <a style={{marginLeft:'108px',color:'black'}}>12 Days Left</a>
            </div>
        </div>
        <h1 style={{marginLeft:'650px'}}>Your Fundraisers</h1>
        <div style={{width:'150px',height:'2px',backgroundColor:'goldenrod',marginLeft:'720px',marginTop:'5px',marginBottom:'15px'}}></div>
        <div className='display-fundraisers'>
            <div className='display-container' onClick={()=>navigate('/fundraiser')}>
              <div className='active-fundraiser-image-4'></div>
              <h4>Your_Fund_raiser_1_with required titles is displayed</h4>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-circle-2"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>
              <a style={{marginLeft:'108px',color:'black'}}>By_User_1</a>
              <p><a>₹75,689</a> raised out of <a>₹10,00,000</a></p>
              <div className='progress-line' style={{borderRadius:'4px',marginLeft:'45px',marginTop:'10px',height:'5px',width:'240px',backgroundColor:'darkblue'}}></div>
              <p>Last Donation 34 minutes ago.</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><br></br>
              <a style={{marginLeft:'108px',color:'black'}}>45 Days Left</a>
            </div>
            <div className='display-container' onClick={()=>navigate('/fundraiser')}>
              <div className='active-fundraiser-image-5'></div>
              <h4>Your_Fund_raiser_2_with required titles is displayed</h4> 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-circle-2"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>
              <a style={{marginLeft:'108px',color:'black'}}>By_User_2</a>
              <p><a>₹10,75,689 </a> raised out of <a>₹14,00,000</a></p>
              <div className='progress-line' style={{borderRadius:'4px',marginLeft:'45px',marginTop:'10px',height:'5px',width:'240px',backgroundColor:'darkblue'}}></div>
              <p>Last Donation 3 Hours ago.</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><br></br>
              <a style={{marginLeft:'108px',color:'black'}}>90 Days Left</a>
            </div>
            <div className='display-container' onClick={()=>navigate('/fundraiser')}>
              <div className='active-fundraiser-image-6'></div>
              <h4>Your_Fund_raiser_3_with required titles is displayed</h4>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-circle-2"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>
              <a style={{marginLeft:'108px',color:'black'}}>By_User_3</a>
              <p><a>₹2,45,689</a> raised out of <a>₹10,00,000</a></p>
              <div className='progress-line' style={{borderRadius:'4px',marginLeft:'45px',marginTop:'10px',height:'5px',width:'240px',backgroundColor:'darkblue'}}></div>
              <p>Last Donation 1 Hour ago.</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><br></br>
              <a style={{marginLeft:'108px',color:'black'}}>12 Days Left</a>
            </div>
        </div>
        <h2 style={{marginLeft:'500px',marginTop:'10px',marginBottom:'10px'}}>Fill the form below to create Your own Fundraiser : </h2>
        <div style={{width:'150px',height:'2px',backgroundColor:'goldenrod',marginLeft:'720px',marginTop:'5px',marginBottom:'15px'}}></div>
        <div className='fill-form' style={{marginBottom:'20px',marginLeft:'370px'}}>
        <h4 style={{marginLeft:'20px'}}>Name : </h4>
        <FormControl variant="filled" style={{marginLeft:'50px',marginTop:'10px'}}>
        <InputLabel htmlFor="component-filled">First Name</InputLabel>
        <FilledInput id="component-filled"/>
        </FormControl>&emsp;
        <FormControl variant="filled" style={{marginTop:'10px'}}>
        <InputLabel htmlFor="component-filled">Last Name</InputLabel>
        <FilledInput id="component-filled"/>
        </FormControl><br></br>
        <h4 style={{marginLeft:'20px'}}>Address : </h4>
        <FormControl variant="filled" style={{marginLeft:'50px',marginTop:'10px'}}>
        <InputLabel htmlFor="component-filled">Address Line:1</InputLabel>
        <FilledInput id="component-filled"/>
        </FormControl>&emsp;
        <FormControl variant="filled" style={{marginTop:'10px'}}>
        <InputLabel htmlFor="component-filled">Address Line:2</InputLabel>
        <FilledInput id="component-filled"/>
        </FormControl><br></br>
        <FormControl variant="filled" style={{marginLeft:'50px',marginTop:'10px'}}>
        <InputLabel htmlFor="component-filled">City</InputLabel>
        <FilledInput id="component-filled"/>
        </FormControl>&emsp;
        <FormControl variant="filled" style={{marginTop:'10px'}}>
        <InputLabel htmlFor="component-filled">State</InputLabel>
        <FilledInput id="component-filled"/>
        </FormControl><br></br>
        <FormControl variant="filled" style={{marginLeft:'50px',marginTop:'10px'}}>
        <InputLabel htmlFor="component-filled">Zip Code</InputLabel>
        <FilledInput id="component-filled"/>
        </FormControl>
        <Autocomplete id="country-select-demo"
      sx={{ width: 200,marginLeft:'290px',marginTop:'-55px' }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            alt=""
          />
          {option.label} ({option.code}) +{option.phone}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
        <h4 style={{marginLeft:'20px'}}>Phone Number :&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;E-mail : </h4>
        <FormControl variant="filled" style={{marginLeft:'50px',marginTop:'10px'}}>
        <InputLabel htmlFor="component-filled">Phone Number</InputLabel>
        <FilledInput id="component-filled"/>
        </FormControl>
        <FormControl variant="filled" style={{marginLeft:'30px',marginTop:'10px'}}>
        <InputLabel htmlFor="component-filled">E-mail</InputLabel>
        <FilledInput id="component-filled"/>
        </FormControl>
        <h4 style={{marginLeft:'20px'}}>Set your Goal :&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Set fundraiser name :</h4>
        <FormControl variant="filled" style={{marginLeft:'50px',marginTop:'10px'}}>
        <InputLabel htmlFor="component-filled" >Enter goal amount: </InputLabel>
        {/* <h1>{fundraiserGoal}</h1> */}
        <FilledInput id="component-filled" value={fundraiserGoal}
    onChange={handleGoalAmountChange}/>
        </FormControl>
        <FormControl variant="filled" style={{marginLeft:'30px',marginTop:'10px'}}>
        <InputLabel htmlFor="component-filled">Enter fundraiser name</InputLabel>
        <FilledInput id="component-filled"/>
        </FormControl>
        <h4 style={{marginLeft:'20px'}}>Reason for raising fund: </h4>
        <FormControl variant="filled" style={{marginLeft:'50px',marginTop:'10px',width:'800px',marginBottom:'10px'}}>
        <InputLabel htmlFor="component-filled">Enter your reason</InputLabel>
        <FilledInput id="component-filled"/>
        </FormControl>
        <h4 style={{marginLeft:'20px'}}>Select Domain :</h4>
        <div className='icon-box'>
              <label  onClick={changeColor}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                Education
                </label>
              <label onClick={changeColor}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-swords"><polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/><line x1="13" x2="19" y1="19" y2="13"/><line x1="16" x2="20" y1="16" y2="20"/><line x1="19" x2="21" y1="21" y2="19"/><polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5"/><line x1="5" x2="9" y1="14" y2="18"/><line x1="7" x2="4" y1="17" y2="20"/><line x1="3" x2="5" y1="19" y2="21"/></svg>
                War Relief
                </label>
              <br></br>
              <label onClick={changeColor}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-stethoscope"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/></svg>
                Medical
                </label>
              <label onClick={changeColor}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dog"><path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5"/><path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"/><path d="M8 14v.5"/><path d="M16 14v.5"/><path d="M11.25 16.25h1.5L12 17l-.75-.75Z"/><path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306"/></svg>
                Animal Welfare
                </label>
              <br></br>
              <label onClick={changeColor}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-utensils-crossed"><path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"/><path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"/><path d="m2.1 21.8 6.4-6.3"/><path d="m19 5-7 7"/></svg>
                Food Donation
                </label>
              <label onClick={changeColor}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grip"><circle cx="12" cy="5" r="1"/><circle cx="19" cy="5" r="1"/><circle cx="5" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/><circle cx="12" cy="19" r="1"/><circle cx="19" cy="19" r="1"/><circle cx="5" cy="19" r="1"/></svg>
                Others
                </label>
              <br></br>
              <h1>{fundraiserGoal}</h1>
        </div>
        <label style={{marginLeft:'40px'}}><Switch checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }}/>I agree to terms & conditions</label><br></br>
        <Button variant="contained" color="success" onClick={handleClick} style={{marginLeft:'50px',marginBottom:'15px'}}>Submit</Button>
        <Button variant="outlined" color="error" style={{marginLeft:'20px',marginBottom:'15px'}}>Clear</Button>
        </div>
        <div className='mainpage-Footer' style={{height:'120px',width:'100%',backgroundColor:'#155f58',textAlign:'center'}}>
              <h1 style={{color:'blanchedalmond',paddingTop:'40px'}}>Thank You !!</h1>
        </div>
    </div>
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
  <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
    Thanks! for using our platform.
  </Alert>
</Snackbar>
    </>
  )
}
export default Fundraisermain;
