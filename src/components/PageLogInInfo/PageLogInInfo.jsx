import React from 'react';
import UseStylesPageLogInInfo from './UseStylesPageLogInInfo';

const PageLogInInfo = () => {
  UseStylesPageLogInInfo()

  return (
    <div>
      <h1 className='logIn-info'>Log In Please!</h1>
      <div className='data-to-auth-container'>
        <p className='auth-given-data'>Use one of these emails and logins:</p>
      </div>
    </div>
  )
}

export default PageLogInInfo