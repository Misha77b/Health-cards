import React from 'react';
import { useSelector } from 'react-redux';
import VisitsList from '../VisitsList/VisitsList';
import PageLogInInfo from '../PageLogInInfo/PageLogInInfo';
import UseStylesMain from './UseStylesMain';
// import Preloader from '../Preloader/Preloader';

const Main = () => {
  UseStylesMain()
  
  const isAuth = localStorage.getItem('token');
  const auth = useSelector(state => state.authReducer.auth);

  return (
    <div className='main'>
      {!isAuth ? <PageLogInInfo /> : <VisitsList />}
      {/* <Preloader /> */}
    </div>
  )
}

export default Main