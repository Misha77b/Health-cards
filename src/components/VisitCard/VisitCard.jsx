import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Accordion from '../accordion/Accordion';

const VisitCard = ({ visits, searchFilter }) => {

  console.log(searchFilter);
  console.log(visits);
  return (
    <>
      {visits.map((visit) => {
        const searchByFullName = visit.fullName.toLowerCase().includes(searchFilter.toLowerCase());
        const searchByDoctor = visit.doctor.toLowerCase().includes(searchFilter.toLowerCase());
        const searchByUrgency = visit.urgency.toLowerCase().includes(searchFilter.toLowerCase());
        if(searchByFullName || searchByDoctor || searchByUrgency) {
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
        }
      })}
    </>
  )
}

export default VisitCard;

VisitCard.propTypes = {
  visits: PropTypes.array,
  searchFilter: PropTypes.string
}