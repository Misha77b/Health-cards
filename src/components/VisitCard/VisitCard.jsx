import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Accordion from '../accordion/Accordion';

const VisitCard = ({ visits }) => {

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