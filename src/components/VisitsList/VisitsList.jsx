import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Preloader from '../Preloader/Preloader';
import { setIsLoading } from '../../API/visits/visits.actions';

import { getVisits } from '../../API/visits/visits.thunks';
import VisitCard from '../VisitCard/VisitCard';

const VisitsList = () => {
  
  const dispatch = useDispatch()

  const visits = useSelector((state) => state.visitsReducer.visits);
  const isLoading = useSelector(state => state.visitsReducer.isLoading);

  if(isLoading) {
    dispatch(setIsLoading(true));
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(getVisits())
    }, 1500)
  }, []);

  console.log(visits);
    
  return (
    <>
      {!isLoading ? <Preloader /> : 
        <div style={{width: '100%', display: 'flex', justifyContent: 'space-betwen', justifyContent: 'center', flexWrap: 'wrap'}} >
          {visits.length === 0 ? <h1 style={{margin: '325px auto'}} >No items have been added...</h1> : 
            <VisitCard 
              visits={visits}
            />
          }
        </div>
      
      }
    </>
  )
}

export default VisitsList