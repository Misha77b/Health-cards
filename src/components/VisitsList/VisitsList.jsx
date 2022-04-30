import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Preloader from '../Preloader/Preloader';
import Search from '../Search/Search';
import VisitCard from '../VisitCard/VisitCard';
import useStylesVisitList from './useStylesVisitList';

import { setIsLoading } from '../../API/visits/visits.actions';
import { getVisits } from '../../API/visits/visits.thunks';

const VisitsList = () => {
  useStylesVisitList()
  
  const dispatch = useDispatch();

  const visits = useSelector((state) => state.visitsReducer.visits);
  const isLoading = useSelector(state => state.visitsReducer.isLoading);
  const searchFilter = useSelector(state => state.visitsReducer.searchValue);
  const searchByDoctorValue = useSelector(state => state.visitsReducer.searchByDoctorValue);
  const searchByUrgencyValue = useSelector(state => state.visitsReducer.searchByUrgencyValue);

  if(isLoading) {
    dispatch(setIsLoading(true));
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(getVisits());
    }, 1500);
  }, []);

    
  return (
    <>
      {!isLoading ? <Preloader /> : <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>      
          <Search />
          <div style={{width: '100%', display: 'flex', justifyContent: 'space-betwen', justifyContent: 'center', flexWrap: 'wrap'}} >
            {visits.length === 0 ? <h1 className='no-items-title'>No items have been added...</h1> : 
              <VisitCard 
                visits={visits}
                searchFilter={searchFilter}
                searchByDoctorValue={searchByDoctorValue}
                searchByUrgencyValue={searchByUrgencyValue}
              />
            }
          </div>
        </div>
      }
    </>
  )
}

export default VisitsList