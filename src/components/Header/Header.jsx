import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import UseStylesHeader from './UseStylesHeader';
import Button from '@mui/material/Button';
import Modals from '../Modals/Modals';

const Header = () => {
  UseStylesHeader();

  const [open, setOpen] = useState(false);
  const isAuth = localStorage.getItem('token');
  const auth = useSelector(state => state.authReducer.auth);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className='header'>
        <img className="logo-img" src="../logo-img.png" alt="logo-img" />
        <h2 className="header-logo-title">LIFE IS A TREASURE</h2>
        <Button
            onClick={handleOpen}
            className='header-btn'
            sx={{
            margin: '10px 50px',
            border: '2px solid gold',
            background: 'transparent',
            color: 'gold',
            borderRadius: '5px',
            }}
        > 
          {!isAuth ? 'Log in' : 'Create visit'}
        </Button>
      </div>
      {open && 
        <Modals 
          open={open}
          handleClose={handleClose}
        />
      }
    </>
  )
}

export default Header