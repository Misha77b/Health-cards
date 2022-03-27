import { Card } from '@mui/material'
import React, { useEffect } from 'react'
import CardsList from '../CardsList/CardsList'
import PageLogInInfo from '../PageLogInInfo/PageLogInInfo'
import UseStylesMain from './UseStylesMain'

const Main = () => {
  UseStylesMain()
  
  const isAuth = localStorage.getItem('token');
  // Think about reloading the page afther auth

  return (
    <div className='main'>
      {!isAuth ? <PageLogInInfo /> : <CardsList />}
    </div>
  )
}

export default Main