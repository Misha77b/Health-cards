import React from 'react';
import { Link } from "react-router-dom";
import UseStylesPageLogInInfo from './UseStylesPageLogInInfo';

const PageLogInInfo = () => {
  UseStylesPageLogInInfo()

  return (
    <div className='logIn-main'>
      <h1 className='logIn-info'>Log In Please!</h1>
      <div className='given-data-wrapper'>
        <p className='auth-given-data'>Use one of these emails and logins:</p>
        <div className='data-to-auth-container'>
          <p className='data-info'>
            <b>Email:</b> <span className='data'>example1@gmail.com</span> <b>Password:</b> <span className='data'>123456789</span>
          </p> 
          <p className='data-info'>
            <b>Email:</b> <span className='data'>example2@gmail.com</span> <b>Password:</b> <span className='data'>123456789</span>
          </p> 
          <p className='data-info'>
            <b>Email:</b> <span className='data'>example3@gmail.com</span> <b>Password:</b> <span className='data'>123456789</span>
          </p> 
        </div>
      </div>
      <p className='pass-registration'>
        Or you can go through registration <a className='get-data-link' href="https://ajax.test-danit.com/front-pages/cards-register.html" target={'blank'}><span className='link-get-token'>here</span></a>, to get your own token, and use your own login and password to logIn
      </p>
    </div>
  )
}

export default PageLogInInfo