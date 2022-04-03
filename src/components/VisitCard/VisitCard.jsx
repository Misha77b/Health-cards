import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UseStylesVisitCard from './UseStylesVisitCard';
import Accordion from '../accordion/Accordion';

const VisitCard = ({ visits }) => {

  const styles = UseStylesVisitCard();

  const { fullName, visitPurpose, visitShortDescription, urgency, doctor, bloodPressure, massBodyIndex, prevIllnesses, age, lastVisitDate, id } = visits;

  // const [edit, setEdit] = useState(false);

  // const handleEditRequest = () => {
  //   if(id === event.target.id) {
  //     setEdit(false)
  //   }
  // };

  console.log(visits);
  return (
    <>
      {visits.map((visit) => {
        return <div key={visit.id}> 
          <Accordion 
            fullName={visit.fullName}
            visitPurpose={visit.visitPurpose}
            visitShortDescription={visit.visitShortDescription}
            urgency={visit.urgency}
            doctor={visit.doctor}
            bloodPressure={visit.bloodPressure}
            massBodyIndex={visit.massBodyIndex}
            prevIllnesses={visit.prevIllnesses}
            age={visit.age}
            lastVisitDate={visit.lastVisitDate}
            id={visit.id}
          />
        </div>
      })}
    </>
  )
}

export default VisitCard;

VisitCard.propTypes = {
  visits: PropTypes.array
}