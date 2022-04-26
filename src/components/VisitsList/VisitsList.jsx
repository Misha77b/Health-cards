import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Preloader from '../Preloader/Preloader';
import { setIsLoading } from '../../API/visits/visits.actions';
import { getVisits } from '../../API/visits/visits.thunks';
import VisitCard from '../VisitCard/VisitCard';
import CardFilter from '../cardFilter/CardFilter';

const VisitsList = () => {
  
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
          <CardFilter />
          <div style={{width: '100%', display: 'flex', justifyContent: 'space-betwen', justifyContent: 'center', flexWrap: 'wrap'}} >
            {visits.length === 0 ? <h1 style={{margin: '325px auto'}} >No items have been added...</h1> : 
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