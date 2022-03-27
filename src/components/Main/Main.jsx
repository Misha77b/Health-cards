import { Card } from '@mui/material'
import { useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import CardsList from '../CardsList/CardsList'
import PageLogInInfo from '../PageLogInInfo/PageLogInInfo'
import UseStylesMain from './UseStylesMain'

const Main = () => {
  UseStylesMain()
  
  const isAuth = localStorage.getItem('token');
  const auth = useSelector(state => state.authReducer.auth);

  return (
    <div className='main'>
      {!isAuth ? <PageLogInInfo /> : <CardsList />}
    </div>
  )
}

export default Main