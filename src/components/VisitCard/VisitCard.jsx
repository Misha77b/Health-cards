import React from 'react';
import PropTypes from 'prop-types';
import Accordion from '../accordion/Accordion';

const VisitCard = ({ visits, searchFilter, searchByDoctorValue,  searchByUrgencyValue}) => {

  return (
    <>
      {visits.map(visit => {
        const searchByFullName = visit.fullName.toLowerCase().includes(searchFilter.toLowerCase());
        const searchByDoctor = visit.doctor.includes(searchByDoctorValue);
        const searchByUrgency = visit.urgency.includes(searchByUrgencyValue);
        if(searchByFullName && searchByDoctor && searchByUrgency) {
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
  searchFilter: PropTypes.string,
  searchByDoctorValue: PropTypes.string,
  searchByUrgencyValue: PropTypes.string
}