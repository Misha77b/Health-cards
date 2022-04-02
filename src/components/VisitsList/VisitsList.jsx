import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getVisits } from '../../API/visits/visits.thunks';
import VisitCard from '../VisitCard/VisitCard';

const VisitsList = () => {
  
  const dispatch = useDispatch()

  const visits = useSelector((state) => state.visitsReducer.visits);

  useEffect(() => {
    dispatch(getVisits())
  }, []);

  console.log(visits);
    
  return (
    <div style={{width: '100%', display: 'flex', justifyContent: 'space-betwen', flexWrap: 'wrap'}} >
      {visits.length === 0 ? <h1 style={{margin: '325px auto'}} >No items have been added...</h1> : 
        <VisitCard 
          visits={visits}
        />
      }
    </div>
  )
}

export default VisitsList