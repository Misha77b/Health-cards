import React from 'react';
import UseStylesPageLogInInfo from './UseStylesPageLogInInfo';

const PageLogInInfo = () => {
  UseStylesPageLogInInfo()

  return (
    <div className='logIn-main'>
      <h1 className='logIn-info'>Log In Please!</h1>
      <p className='auth-given-data'>Use one of these emails and logins:</p>
      <div className='data-to-auth-container'>
        <span> <b>Email:</b> example1@gmail.com <b>Password:</b> 123456789</span> 
        <span> <b>Email:</b> example2@gmail.com <b>Password:</b> 123456789</span> 
        <span> <b>Email:</b> example3@gmail.com <b>Password:</b> 123456789</span> 
      </div>
    </div>
  )
}

export default PageLogInInfo