import { useSelector } from 'react-redux'
import React from 'react'
import VisitsList from '../VisitsList/VisitsList'
import PageLogInInfo from '../PageLogInInfo/PageLogInInfo'
import UseStylesMain from './UseStylesMain'

const Main = () => {
  UseStylesMain()
  
  const isAuth = localStorage.getItem('token');
  const auth = useSelector(state => state.authReducer.auth);

  return (
    <div className='main'>
      {!isAuth ? <PageLogInInfo /> : <VisitsList />}
    </div>
  )
}

export default Main