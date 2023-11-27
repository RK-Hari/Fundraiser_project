import React from 'react'
import './examplecssstyle.css';
const Example = () => {
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
    <div>
        <p>
          <label for="username">username</label>
          <input id="username" name="username" type="text"></input>
        </p>
        <p>
          <label for="password">Password</label>
          <input autoComplete='off' id="password" name="password" type="text" onKeyUp={(e) => passCheck(e.target.value)}>
          </input>
        </p>
    <p>
      <label className='password-check'> 8 characters </label>
      <label className='password-check'> 1 number </label>
      <label className='password-check'> 1 special character </label>
      <label className='password-check'> 1 uppercase character </label>
    </p>
    </div>
  )
}
export default Example
